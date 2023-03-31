import React from "react";
import { useState } from "react";
import { Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "constants/constants";

const ForgotPasswordPagePage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  const handleSubmit = () => {
    const uri = encodeURI("account/forgot-password");
    axiosClient
        .post(uri, { email: email})
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
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] p-[153px] sm:px-[20px] md:px-[40px] w-[100%]">
        <Text
          className="not-italic text-black_900 text-left w-[auto]"
          as="h1"
          variant="h1"
        >
          KidsAbility
        </Text>
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
            className="font-normal leading-[normal] not-italic p-[0] placeholder:text-black_900 sm:pr-[20px] text-[20px] text-black_900 text-left w-[100%]"
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
