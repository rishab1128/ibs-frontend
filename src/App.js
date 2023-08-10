import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login'
import SignUp from './components/signup/SignUp';
import Home from './components/home/Home';
import MyAccount from './components/myAccount/MyAccount';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/myaccount" element={<MyAccount/>}/>
            <Route path="/" exact element={<Home/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
