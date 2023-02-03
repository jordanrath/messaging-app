import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
import Reset from './Reset';


const App = () => {


  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}/>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      <section>
         {/* {user ? <LiveChat firestore={firestore} /> : <SignIn auth={auth} />} */}
      </section>
    </div>
  );
}

export default App;
