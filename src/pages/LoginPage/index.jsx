import React, { useState, useEffect } from "react";
import { axiosClient } from "constants/constants";
import { Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

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
          navigate("/homepagepatients");
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
      <div className="bg-white_A700 flex flex-col font-inter gap-[9px] items-center justify-start mx-[auto] p-[250px] sm:px-[20px] md:px-[40px] w-[100%]">
        <Text
          className="not-italic text-black_900 text-left w-[auto]"
          as="h1"
          variant="h1"
        >
          KidsAbility
        </Text>
        <div className="flex flex-col items-start justify-start mb-[4px] md:w-[100%] w-[41%]">
          <Input
            wrapClassName="outline outline-[2px] outline-black_900 pl-[11px] pr-[35px] py-[8px] shadow-bs w-[100%]"
            className="font-normal leading-[normal] not-italic p-[0] placeholder:text-black_900 sm:pr-[20px] text-[20px] text-black_900 text-left w-[100%]"
            name="group227"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          ></Input>
          <Input
            wrapClassName="mt-[21px] outline outline-[2px] outline-black_900 pl-[11px] pr-[35px] py-[8px] shadow-bs w-[100%]"
            className="font-normal leading-[normal] not-italic p-[0] placeholder:text-black_900 sm:pr-[20px] text-[20px] text-black_900 text-left w-[100%]"
            type="password"
            name="group228"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          ></Input>
          <Text
            className="common-pointer md:ml-[0] ml-[144px] mt-[8px] not-italic text-black_900 text-left w-[auto]"
            variant="body1"
            onClick={() => navigate("/forgotpasswordpage")}
          >
            Forgot Password?
          </Text>
          <Button
            className="common-pointer bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] mt-[8px] not-italic py-[8px] rounded-[21px] text-[20px] text-black_900 text-center w-[auto]"
            onClick={handleLogin}
          >
            Log in
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginPagePage;
