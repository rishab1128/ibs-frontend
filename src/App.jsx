import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login'
import SignUp from './components/register/Register';
import Home from './components/home/Home';
import MyAccount from './components/myAccount/MyAccount';
import UsersList from './components/usersList/UsersList';
import RegisterForm from './pages/RegisterForm';
import OpenAccountForm from './pages/OpenAccountForm';
import SetNewPassword from './pages/SetNewPassword';
import EnterOtp from './pages/EnterOtp';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/openaccount" element={<OpenAccountForm/>}/>
            <Route path="/register" element={<RegisterForm/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/myaccount" element={<MyAccount/>} />
            <Route path="/enterOtp" element={<EnterOtp/>} />
            <Route path="/setnewpassword" element={<SetNewPassword/>} />
            <Route path="/usersList" exact element={<UsersList/>} />
            <Route path="/signup" element={<SignUp/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
