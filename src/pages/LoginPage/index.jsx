import React, { useState, useEffect } from "react";
import { axiosClient } from "constants/constants";
import { Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

import './../../styles/DataCollection.css';
import './../../styles/input.css';
import myImage from './../../assets/images/k_scope.png';


const LoginPagePage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tokenDataRes, setTokenDataRes] = useState(null);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log("handleLogin function called");
    axiosClient
      .post("/login", { email: email, password: password })
      .then((response) => {
        console.log("in then");
        console.log(response);
        sessionStorage.setItem("sessionToken", response.data.sessionToken);
        navigate("/accountdashboard");
      })
      .catch((error) => {
        console.log("in error");
        console.log(error);
        if (error.response && error.response.status === 401) {
          alert("Login Credentials Invalid");
          setEmail("");
          setPassword("");
        }
      });
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <img src={myImage} alt="My Image" style={{ margin: '0 auto', maxWidth: '100%', display: 'block', marginLeft: '5em' }} />
          <div className="data-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

            <Input
              wrapClassName="outline outline-[2px] outline-black_900 pl-[11px] pr-[35px] py-[8px] shadow-bs w-[100%]"
              className="input-box"
              name="group227"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            ></Input>
            <Input
              wrapClassName="mt-[21px] outline outline-[2px] outline-black_900 pl-[11px] pr-[35px] py-[8px] shadow-bs w-[100%]"
              className="input-box"
              type="password"
              name="group228"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            ></Input>
            <Button
              className="replace-button"
              onClick={handleLogin}
              style={{ backgroundColor: 'blue' }}
            >
              Log in
            </Button>
            <Button
              className="replace-button"
              variant="body1"
              onClick={() => navigate("/forgotpasswordpage")}
            >
              Forgot Password?
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPagePage;
