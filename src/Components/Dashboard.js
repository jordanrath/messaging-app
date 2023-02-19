import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Modal from "./Modal";
import Logout from "./Logout";

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
      <h2>Hello {name}, welcome to your account dashboard</h2>
      <div className="dashboard__container">
          <Modal title='Account Info' name={name} email={user?.email} />
          {/* <div>You're currently logged in as {user?.email}.</div> */}
        <button className="dashboard__btn" onClick={() => navigate('/chatroom')}>
          <span className="material-symbols-outlined">
            chat
          </span>
          <h4>Chat Room</h4>
        </button>
        <button className="dashboard__btn" onClick={() => navigate('/reset')}>
          <span className="material-symbols-outlined">
            lock_reset
          </span>
          <h4>Reset Password</h4>
        </button>
       <button className="dashboard__btn" onClick={Logout}>
          <span className="material-symbols-outlined">logout</span>
          <h4>Logout</h4>
        </button>
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