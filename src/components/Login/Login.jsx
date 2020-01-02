import React from "react";
import Header from '../Misc/Header'
import SocialMediaFooter from "../Misc/SocialMediaFooter";

const Login = () => {
  const handleChange = e => {};

  const handleSubmit = e => {};

  return (
    //nav
    <div className="login-container">
      <nav>
        <button className="nav-btn">Docs</button>
      </nav>
      <nav>
        <button className="nav-btn">About</button>
        <button className="nav-btn">Create Account</button>
      </nav>
      <Header/>
      <form action="" className="login-form">
        <input type="text" className="login-input" />
        <input type="text" className="login-input" />
        <button className="login-btn">Login</button>
      </form>
      <SocialMediaFooter />
    </div>
  );
};

export default Login;
