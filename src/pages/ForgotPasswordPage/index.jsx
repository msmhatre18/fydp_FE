import React from "react";
import { useState } from "react";
import { Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "constants/constants";
import './../../styles/DataCollection.css';

import myImage from './../../assets/images/k_scope.png';
const ForgotPasswordPagePage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  const handleSubmit = () => {
    const uri = encodeURI("account/forgot-password");
    axiosClient
      .post(uri, { email: email })
      .then((response) => {
        console.log(response);
        navigate("/passwordrequestedpage");
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
      <div className="data-collection" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img src={myImage} alt="My Image" style={{ margin: '0 auto', maxWidth: '100%', display: 'block'}} />
        <Text
          className="font-normal mt-[98px] not-italic text-black_900 text-left w-[auto]"
          as="h5"
          variant="h5"
        >
          Please enter your login email:
        </Text>
        <div className="flex flex-col gap-[23px] items-center justify-start mb-[145px] mt-[11px] md:w-[100%] w-[31%]">
          <Input
            wrapClassName="outline outline-[2px] outline-black_900 pl-[11px] pr-[35px] py-[8px] shadow-bs w-[100%]"
            className="input-box"
            type="email"
            name="group182"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          ></Input>
          <Button
            className="common-pointer bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] not-italic py-[8px] rounded-[21px] text-[20px] text-black_900 text-center w-[auto]"
            onClick={handleSubmit}
          >
            Request Password Reset
          </Button>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPagePage;
