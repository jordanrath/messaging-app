import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../Firebase";
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
      <div className="dashboard__title">
        <h2>Welcome to your Chatroom</h2>
        <h2> account, {name}</h2>
      </div>
      <div className="dashboard__container">
          <Modal title='Account Info' name={name} email={user?.email} />   
        <button className="dashboard__btn" onClick={() => navigate('/chatroom')}>
          <span className="material-symbols-outlined">
            chat
          </span>
          <h4>Chatroom</h4>
        </button>
        <button className="dashboard__btn" onClick={() => navigate('/reset')}>
          <span className="material-symbols-outlined">
            lock_reset
          </span>
          <h4>Reset Password</h4>
        </button>
       <Logout className="dashboard__btn">
          <span className="material-symbols-outlined">logout</span>
       </Logout>
      </div>
    </div>
    {/* <div 
      className='overlay'
      // onClick={() => {handleOpenedModal(false)}}
    /> */}
    </>
  )
}

export default Dashboard;