import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ChatRoom from './Components/ChatRoom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';
import Reset from './Components/Reset';
import AuthProvider from './Context/AuthProvider';
import Contact from './Components/Contact';

const App = () => {

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 300,
      offset: 0,
      easing: 'ease-in-out-sine',
      anchorPlacement: '#chat-bubble',
    });
    AOS.refresh();
  }, []);

  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />}/>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/reset" element={<Reset />} />
            <Route exact path="/chatroom" element={<ChatRoom />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
