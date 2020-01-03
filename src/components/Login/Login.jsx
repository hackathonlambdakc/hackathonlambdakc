import React, {useState} from "react";
import LoginNav from './LoginNav'
import Header from '../Misc/Header'
import SocialMediaFooter from "../Misc/SocialMediaFooter";

const Login = () => {

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPw, setLoginPw] = useState('')

    //loading screen
  const {loginLoading, setLoginLoading} = useState(false)

  const handleChange = e => {
    // setLoginData({...loginData,[e.target.name]:e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();

// Auth handler
  };

  return (
    //nav
    <div className="login-container">
      <LoginNav/>
      <Header/>
      {/* login form */}
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <input type="text" className="login-input" onChange={handleChange}/>
        <input type="text" className="login-input" />
        <button className="login-btn">Login</button>
      </form>
      <SocialMediaFooter />
    </div>
  );
};

export default Login;
