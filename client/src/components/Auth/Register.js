import React, { useState } from "react";
import axios from "axios";

// import { useNavigate } from "react-router-dom";
// import './register.css'

export const Register = (props) => {
  const [isuserName, setIsUsername] = useState(true);
  const [isemail, setIsEmail] = useState(true);
  const [ispassword, setIsPassword] = useState(true);

  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    // console.log(credentials)
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:6060/register", {
        ...credentials,
      });
      // console.log(credentials);
      console.log(res);
      if (res?.data?.status === "success") {
        // console.log('hiiiii')
        window.location.replace("/");
        setIsUsername(true);
        setIsEmail(true);
        setIsPassword(true);
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.msg === "internal server error") {
        setIsUsername(false);
        setIsEmail(true);
      } else if (error.response.data.msg === "email already exist") {
        setIsUsername(true);
        setIsEmail(false);
      } else if (
        error.response.data.msg === "Password/Confirm Password dosent match"
      ) {
        setIsUsername(true);
        setIsEmail(true);
        setIsPassword(false);
      }
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={submitHandler}>
        <label htmlFor="username">username</label>
        <input
          type="username"
          placeholder="username"
          id="userName"
          onChange={handleInputChange}
          className="lInput"
        />
        <span>{isuserName ? "" : "User already exist"}</span>

        <label htmlFor="email">email</label>
        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleInputChange}
          className="lInput"
        />
        <span>{isemail ? "" : "Email already exist"}</span>

        <label htmlFor="password">password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleInputChange}
          className="lInput"
        />

        <label htmlFor="confirmpassword">confirm password</label>
        <input
          type="password"
          placeholder="confirm password"
          id="confirmPassword"
          onChange={handleInputChange}
          className="lInput"
        />
        <span>{ispassword ? "" : "Password dosent match"}</span>
        <button type="submit" className="lButton">
          Register
        </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login Here
      </button>
    </div>
  );
};

// export default Resgister;
