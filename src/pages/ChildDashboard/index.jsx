import React from "react";

import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const ChildDashboardPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[15px] w-[100%]">
        <div className="flex flex-col gap-[56px] items-center justify-start max-w-[1103px] mb-[103px] mt-[2px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[56px] items-center justify-start w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
              <Img
                src="images/img_arrowup.svg"
                className="common-pointer h-[33px] md:mt-[0] mt-[3px] w-[auto]"
                onClick={() => navigate(-1)}
                alt="arrowup"
              />
              <Text
                className="md:ml-[0] ml-[370px] not-italic text-black_900 text-center w-[auto]"
                as="h2"
                variant="h2"
              >
                Child 1’s Dashboard
              </Text>
              <Text
                className="common-pointer bg-white_A700 flex h-[40px] items-center justify-center mb-[3px] md:ml-[0] ml-[320px] not-italic outline outline-[1px] outline-black_900 rounded-[50%] text-black_900 text-center w-[40px]"
                variant="body2"
                onClick={() => navigate("/")}
              >
                Logout
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between md:w-[100%] w-[72%]">
              <div className="bg-bluegray_100 flex flex-col gap-[12px] items-center justify-end p-[28px] sm:px-[20px] md:w-[100%] w-[43%]">
                <Text
                  className="mt-[27px] not-italic text-black_900 text-center w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Behaviour Data
                </Text>
                <Button
                  className="common-pointer bg-white_A700 cursor-pointer font-normal h-[100px] leading-[normal] not-italic py-[34px] rounded-[50%] sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-center w-[100px]"
                  onClick={() => navigate("/behaviourdata")}
                >
                  Icon
                </Button>
              </div>
              <div className="bg-bluegray_100 flex flex-col gap-[10px] items-center justify-end p-[28px] sm:px-[20px] md:w-[100%] w-[43%]">
                <Text
                  className="mt-[29px] not-italic text-black_900 text-center w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Programs for Child 1
                </Text>
                <Button
                  className="common-pointer bg-white_A700 cursor-pointer font-normal h-[100px] leading-[normal] not-italic py-[34px] rounded-[50%] sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-center w-[100px]"
                  onClick={() => navigate("/programsnoneopen")}
                >
                  Icon
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-bluegray_100 flex flex-col gap-[12px] items-center justify-end p-[28px] sm:px-[20px] md:w-[100%] w-[31%]">
            <Text
              className="mt-[27px] not-italic text-black_900 text-center w-[auto]"
              as="h4"
              variant="h4"
            >
              Mand Data
            </Text>
            <Button className="bg-white_A700 cursor-pointer font-normal h-[100px] leading-[normal] not-italic py-[34px] rounded-[50%] sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-center w-[100px]">
              Icon
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChildDashboardPage;
