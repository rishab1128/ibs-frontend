import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyAccount from './components/myAccount/MyAccount';
import UsersList from './components/usersList/UsersList';
import RegisterForm from './pages/RegisterForm';
import OpenAccountForm from './pages/OpenAccountForm';
import SetNewPassword from './pages/SetNewPassword';
import EnterOtp from './pages/EnterOtp';
import LoginForm from './pages/LoginForm';
import ShowMessage from './pages/ShowMessage';
import ForgotCredentials from './pages/ForgotCredentials';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/openaccount" element={<OpenAccountForm/>}/>
            <Route path="/register" element={<RegisterForm/>}/>
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/enterOtp" element={<EnterOtp/>} />
            <Route path="/setnewpassword" element={<SetNewPassword/>} />
            <Route path="/forgotcredentials" element={<ForgotCredentials/>} />
            <Route path="/showMessage" exact element={<ShowMessage/>} />
            <Route path="/usersList" exact element={<UsersList/>} />
            {/* <Route path="/signup" element={<SignUp/>} /> */}
            {/* <Route path="/myaccount" element={<MyAccount/>} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
