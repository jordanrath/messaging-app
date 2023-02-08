import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatRoom from './Components/ChatRoom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';
import Reset from './Components/Reset';
import SendMessage from './Components/SendMessage';


const App = () => {


  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}/>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<ChatRoom />} />
        </Routes>
      </Router>
      <section>
         {/* {user ? <LiveChat firestore={firestore} /> : <SignIn auth={auth} />} */}
      </section>
    </div>
  );
}

export default App;