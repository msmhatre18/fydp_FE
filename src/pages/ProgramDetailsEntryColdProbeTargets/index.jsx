import React from "react";

import { Img, Text, List, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const ProgramDetailsEntryColdProbeTargetsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[9px] w-[100%]">
        <div className="flex flex-col justify-start max-w-[1098px] mb-[21px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex sm:flex-col flex-row md:gap-[40px] items-end justify-between w-[100%]">
            <Img
              src="images/img_arrowup.svg"
              className="common-pointer h-[33px] mb-[2px] sm:mt-[0] mt-[17px] w-[auto]"
              onClick={() => navigate("/homepagepatients")}
              alt="arrowup"
            />
            <Text
              className="sm:mt-[0] mt-[8px] not-italic text-black_900 text-center w-[auto]"
              as="h2"
              variant="h2"
            >
              Program Name/ID 2
            </Text>
            <Text
              className="common-pointer bg-white_A700 flex h-[40px] items-center justify-center mb-[12px] not-italic outline outline-[1px] outline-black_900 rounded-[50%] text-black_900 text-center w-[40px]"
              variant="body2"
              onClick={() => navigate("/")}
            >
              Logout
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[72px] mt-[41px] not-italic text-black_900 text-left w-[auto]"
            as="h4"
            variant="h4"
          >
            Targets
          </Text>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between ml-[auto] mt-[19px] md:w-[100%] w-[86%]">
            <div className="flex items-center justify-start mb-[8px] md:w-[100%] w-[auto]">
              <List
                className="flex-col gap-[40px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div className="flex-1 gap-[42px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between my-[0] w-[100%]">
                  <Input
                    wrapClassName="bg-white_A700 flex-1 outline outline-[2px] outline-black_900 px-[35px] py-[4px] w-[100%]"
                    className="font-normal leading-[normal] md:text-[22px] not-italic p-[0] placeholder:bg-white_A700 placeholder:text-bluegray_100 sm:px-[20px] sm:text-[20px] text-[24px] text-bluegray_100 text-left w-[100%]"
                    name="group226"
                    placeholder="1"
                  ></Input>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                </div>
                <div className="flex-1 gap-[42px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between my-[0] w-[100%]">
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                </div>
                <div className="flex-1 gap-[42px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between my-[0] w-[100%]">
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                </div>
                <div className="flex-1 gap-[42px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between my-[0] w-[100%]">
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                </div>
                <div className="flex-1 gap-[42px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between my-[0] w-[100%]">
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                </div>
                <div className="flex-1 gap-[42px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between my-[0] w-[100%]">
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <div className="bg-white_A700 h-[40px] outline outline-[2px] outline-black_900 w-[100%]"></div>
                  <Input
                    wrapClassName="bg-white_A700 flex-1 outline outline-[2px] outline-black_900 px-[35px] py-[5px] w-[100%]"
                    className="font-normal leading-[normal] md:text-[22px] not-italic p-[0] placeholder:bg-white_A700 placeholder:text-bluegray_100 sm:px-[20px] sm:text-[20px] text-[24px] text-bluegray_100 text-left w-[100%]"
                    name="Fifty"
                    placeholder="50"
                  ></Input>
                </div>
              </List>
            </div>
            <Img
              src="images/img_scrollbar.svg"
              className="h-[373px] md:mt-[0] mt-[80px] w-[auto]"
              alt="scrollbar"
            />
          </div>
          <Button className="bg-green_A700 cursor-pointer font-normal leading-[normal] min-w-[207px] md:ml-[0] ml-[871px] mr-[20px] mt-[67px] not-italic py-[6px] rounded-[21px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[auto]">
            Finish
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProgramDetailsEntryColdProbeTargetsPage;
