
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/Login.scss"
import Signup from "./Signup"
import Login from './Login1';
import { useForm } from 'react-hook-form';
const MainApp = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSignup = (email, password) => {
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);
    setActiveTab('login');
    navigate('/login'); 
    
  };

  const handleLogin = (email, password) => {
    const email1=sessionStorage.getItem("email");
    const password1=sessionStorage.getItem("password");
    if(email===email1 && password===password1){
    setLoggedIn(true);
    }
    else{
      setLoggedIn(false);
      alert("Enter Valid Crediential");
    }
  };

  if (loggedIn) {
    navigate('/home');
  }

  return (
    <div>
      {activeTab === 'login' ? (
        <Login handleTabChange={handleTabChange} handleLogin={handleLogin} />
      ) : (
        <Signup handleTabChange={handleTabChange} handleSignup={handleSignup} />
      )}
    </div>
  );
};

export default MainApp;

