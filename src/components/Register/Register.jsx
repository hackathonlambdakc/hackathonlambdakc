import React from "react";
import Header from "../Misc/Header";
import SocialMediaFooter from "../Misc/SocialMediaFooter";
import {Link} from 'react-router-dom'

const Register = () => {
  const handleChange = e => {};

  const handleSubmit = e => {};

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit} className="register-form">
        <label>Email</label>
        <input
          type="email"
          className="register-input"
          placeholder="email"
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input
          type="text"
          className="register-input"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button className="register-btn">Register</button>
        <div className="alreadyreg">
          <p>Already registered? </p>{" "}
          <p>
            <Link href="#">Login</Link>
          </p>
        </div>
      </form>
      <SocialMediaFooter />
    </div>
  );
};

export default Register;
