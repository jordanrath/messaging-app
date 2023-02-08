import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Modal from "./Modal";


const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const q = query(collection(db, "users"), where("uid", "==", user?.uid));
                const doc = await getDocs(q);
                const data = doc.docs[0].data();
    
                setName(data.name);
            } catch (err) {
                console.error(err);
                alert("An error occurred fetching user data");
            }
        };

        if (loading) return;
        if (!user) return navigate("/");
    
        fetchUserName();
      }, [user, loading, navigate]);

  return (
    <>
    <div className="dashboard">
      <h2>Welcome to your Account {name}</h2>
      <div className="dashboard__container">
        <div className="dashboard__box account-info">
          <Modal title='Account Info' name={name} email={user?.email} />
        </div> 
        {/* <div>You're currently logged in as {user?.email}.</div> */}
        <div className="dashboard__box account-info">
          <button className="dashboard__btn" onClick={() => navigate('/chatroom')}>
            Chat Room
          </button>
        </div>
        <div className="dashboard__box security">
          <button className="dashboard__btn" onClick={() => navigate('/reset')}>
            Reset Password
          </button>
        </div>
        <div className="dashboard__box chatroom">
          <button className="dashboard__btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
    <div 
      className='overlay'
      // onClick={() => {handleOpenedModal(false)}}
    />
    </>
  )
}

export default Dashboard;