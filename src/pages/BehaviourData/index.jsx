import React from "react";

import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const BehaviourDataPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-end mx-[auto] pt-[6px] w-[100%]">
        <div className="flex flex-col gap-[21px] items-center justify-start w-[100%]">
          <div className="flex flex-row items-start justify-between max-w-[1110px] mx-[auto] md:px-[20px] w-[100%]">
            <Img
              src="images/img_arrowup.svg"
              className="common-pointer h-[33px] mt-[11px] w-[auto]"
              onClick={() => navigate(-1)}
              alt="arrowup"
            />
            <Text
              className="mt-[14px] not-italic text-black_900 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              ID
            </Text>
            <Text
              className="common-pointer bg-white_A700 flex h-[40px] items-center justify-center mb-[13px] not-italic outline outline-[1px] outline-black_900 rounded-[50%] text-black_900 text-center w-[40px]"
              variant="body2"
              onClick={() => navigate("/")}
            >
              Logout
            </Text>
          </div>
          <div className="bg-bluegray_100 flex items-center justify-end p-[314px] sm:px-[20px] md:px-[40px] w-[100%]">
            <Text
              className="mt-[4px] not-italic text-black_900 text-left w-[auto]"
              as="h4"
              variant="h4"
            >
              Embedded link of aggregate behavior data
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default BehaviourDataPage;
