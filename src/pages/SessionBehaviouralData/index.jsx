import React from "react";

import { Text, Img, Input } from "components";
import { useNavigate } from "react-router-dom";

const SessionBehaviouralDataPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-end mx-[auto] pt-[9px] w-[100%]">
        <div className="flex flex-col gap-[22px] items-center justify-start w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start max-w-[1111px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-[0] mt-[11px] md:w-[100%] w-[4%]">
              <div className="bg-black_900 h-[6px] rounded-[3px] w-[100%]"></div>
              <div className="bg-black_900 h-[6px] mt-[4px] rounded-[3px] w-[100%]"></div>
              <div className="bg-black_900 h-[6px] mt-[4px] rounded-[3px] w-[100%]"></div>
            </div>
            <Text
              className="md:ml-[0] ml-[406px] md:mt-[0] mt-[10px] not-italic text-black_900 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Behavioral Data
            </Text>
            <Img
              src="images/img_arrowup.svg"
              className="common-pointer h-[33px] md:ml-[0] ml-[342px] md:mt-[0] mt-[4px] w-[auto]"
              onClick={() => navigate(-1)}
              alt="arrowup"
            />
            <Text
              className="common-pointer bg-white_A700 flex h-[40px] items-center justify-center mb-[9px] md:ml-[0] ml-[7px] not-italic outline outline-[1px] outline-black_900 rounded-[50%] text-black_900 text-center w-[40px]"
              variant="body2"
              onClick={() => navigate("/")}
            >
              Logout
            </Text>
          </div>
          <div className="bg-bluegray_100 flex items-start justify-start p-[63px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex flex-col md:gap-[40px] gap-[85px] items-start justify-start mb-[386px] md:ml-[0] ml-[38px] md:w-[100%] w-[84%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-[40px] items-center justify-between md:w-[100%] w-[63%]">
                  <div className="flex flex-row items-center justify-between sm:w-[100%] w-[41%]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Behavior 1
                    </Text>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      0
                    </Text>
                    <Img
                      src="images/img_plus_green_a700.svg"
                      className="h-[18px] w-[18px]"
                      alt="plus"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between sm:w-[100%] w-[41%]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Behavior 2
                    </Text>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      0
                    </Text>
                    <Img
                      src="images/img_plus_green_a700.svg"
                      className="h-[18px] w-[18px]"
                      alt="plus_One"
                    />
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row items-center justify-between md:w-[100%] w-[26%]">
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Behavior 3
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    0
                  </Text>
                  <Img
                    src="images/img_plus_green_a700.svg"
                    className="h-[18px] w-[18px]"
                    alt="plus_Two"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-[27px] items-center justify-start md:w-[100%] w-[31%]">
                <Input
                  wrapClassName="bg-white_A700 outline outline-[2px] outline-black_900 pl-[12px] pr-[35px] py-[7px] w-[80%]"
                  className="font-normal leading-[normal] not-italic p-[0] placeholder:text-black_900 sm:pr-[20px] text-[20px] text-black_900 text-left w-[100%]"
                  name="group199"
                  placeholder="Add Behavior"
                ></Input>
                <Img
                  src="images/img_plus_green_a700.svg"
                  className="h-[25px] w-[25px]"
                  alt="plus_Three"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionBehaviouralDataPage;
