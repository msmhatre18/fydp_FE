import React from "react";

import { Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const PasswordRequestedPagePage = () => {
  const navigate = useNavigate();

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
          className="font-normal mt-[91px] not-italic text-black_900 text-left w-[auto]"
          as="h5"
          variant="h5"
        >
          You will receive a password reset link shortly.
        </Text>
        <Button
          className="common-pointer bg-blue_600 cursor-pointer font-normal leading-[normal] mb-[145px] min-w-[254px] mt-[83px] not-italic py-[8px] rounded-[21px] text-[20px] text-black_900 text-center w-[auto]"
          onClick={() => navigate("/")}
        >
          Return to Login
        </Button>
      </div>
    </>
  );
};

export default PasswordRequestedPagePage;
