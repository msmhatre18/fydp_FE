import React from "react";

import { Img, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const CreateClientPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[6px] w-[100%]">
        <div className="flex flex-col items-center justify-start max-w-[1102px] mb-[309px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-end justify-start w-[100%]">
            <Img
              src="images/img_arrowup.svg"
              className="common-pointer h-[33px] mb-[18px] md:mt-[0] mt-[7px] w-[auto]"
              onClick={() => navigate(-1)}
              alt="arrowup"
            />
            <Text
              className="md:ml-[0] ml-[344px] md:mt-[0] mt-[14px] not-italic text-black_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Create new Client
            </Text>
            <Text
              className="common-pointer bg-white_A700 flex h-[40px] items-center justify-center mb-[18px] md:ml-[0] ml-[374px] not-italic outline outline-[1px] outline-black_900 rounded-[50%] text-black_900 text-center w-[40px]"
              variant="body2"
              onClick={() => navigate("/")}
            >
              Logout
            </Text>
          </div>
          <Text
            className="mt-[202px] not-italic text-black_900 text-center w-[auto]"
            as="h4"
            variant="h4"
          >
            Please enter the unique KidsAbility ID of the child to be added:
          </Text>
          <Input
            wrapClassName="bg-white_A700 mt-[23px] outline outline-[2px] outline-black_900 pb-[2px] pl-[20px] pr-[35px] pt-[7px] w-[57%]"
            className="font-normal leading-[normal] md:text-[22px] not-italic p-[0] placeholder:bg-white_A700 placeholder:text-black_900 sm:pr-[20px] sm:text-[20px] text-[24px] text-black_900 text-center w-[100%]"
            name="group190"
            placeholder="ID Input Box"
          ></Input>
          <Button
            className="common-pointer bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] mt-[26px] not-italic py-[8px] rounded-[21px] text-[20px] text-black_900 text-center w-[auto]"
            onClick={() => navigate("/passwordrequestedpage")}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreateClientPage;
