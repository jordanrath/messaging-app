import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatRoom from './Components/ChatRoom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';
import Reset from './Components/Reset';
import AuthProvider from './Utils/AuthProvider';

const App = () => {

  return (
    <div className="app">
      {/* <AuthProvider> */}
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />}/>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/reset" element={<Reset />} />
            <Route exact path="/chatroom" element={<ChatRoom />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      {/* </AuthProvider> */}
    </div>
  );
};

export default App;
