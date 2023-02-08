import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";


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
    <div className="dashboard">
      <div className="dashboard__container">
        <h1>Welcome to your Account {name}</h1>
        <div>You're currently logged in as {user?.email}.</div>
        <button className="dashboard__btn" onClick={() => navigate('/chatroom')}>
          Chat Room
        </button>
        <button className="dashboard__btn" onClick={() => navigate('/reset')}>
          Reset Password
        </button>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Dashboard;