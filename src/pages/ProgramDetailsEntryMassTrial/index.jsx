import React from "react";

import { Img, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const ProgramDetailsEntryMassTrialPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[9px] w-[100%]">
        <div className="flex flex-col gap-[42px] justify-start max-w-[1098px] mb-[21px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[54px] items-start justify-between w-[100%]">
            <div className="flex md:flex-1 flex-col justify-start md:mt-[0] mt-[8px] md:w-[100%] w-[91%]">
              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-end justify-between md:w-[100%] w-[73%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="common-pointer h-[33px] mb-[2px] sm:mt-[0] mt-[8px] w-[auto]"
                  onClick={() => navigate("/homepagepatients")}
                  alt="arrowup"
                />
                <Text
                  className="not-italic text-black_900 text-center w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Program Name/ID 2
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[98px] mt-[61px] md:w-[100%] w-[89%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[4px] md:w-[100%] w-[94%]">
                  <Text
                    className="md:mt-[0] mt-[2px] not-italic text-black_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Program Type
                  </Text>
                  <Text
                    className="mb-[2px] md:ml-[0] ml-[98px] not-italic text-black_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Cold Probe Collection
                  </Text>
                  <Text
                    className="mb-[2px] md:ml-[0] ml-[81px] not-italic text-black_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Mass Trial Collection
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between ml-[auto] mt-[10px] md:w-[100%] w-[39%]">
                  <div className="bg-white_A700 h-[20px] outline outline-[2px] outline-black_900 rounded-[50%] w-[20px]"></div>
                  <div className="bg-black_900 h-[20px] outline outline-[2px] outline-black_900 rounded-[50%] w-[20px]"></div>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[20px] w-[100%]">
                  <Input
                    wrapClassName="bg-white_A700 sm:flex-1 outline outline-[2px] outline-black_900 pl-[14px] pr-[35px] py-[4px] sm:w-[100%] w-[29%]"
                    className="font-normal leading-[normal] md:text-[22px] not-italic p-[0] placeholder:text-bluegray_100 sm:pr-[20px] sm:text-[20px] text-[24px] text-bluegray_100 text-left w-[100%]"
                    name="group136"
                    placeholder="Child"
                  ></Input>
                  <Input
                    wrapClassName="bg-white_A700 sm:flex-1 sm:ml-[0] ml-[78px] outline outline-[2px] outline-black_900 pl-[18px] pr-[35px] py-[4px] sm:w-[100%] w-[29%]"
                    className="font-normal leading-[normal] md:text-[22px] not-italic p-[0] placeholder:text-bluegray_100 sm:pr-[20px] sm:text-[20px] text-[24px] text-bluegray_100 text-left w-[100%]"
                    type="text"
                    name="language"
                    placeholder=" Task Name"
                  ></Input>
                  <Input
                    wrapClassName="bg-white_A700 sm:flex-1 sm:ml-[0] ml-[49px] outline outline-[2px] outline-black_900 pl-[12px] pr-[35px] py-[4px] sm:w-[100%] w-[29%]"
                    className="font-normal leading-[normal] md:text-[22px] not-italic p-[0] placeholder:text-bluegray_100 sm:pr-[20px] sm:text-[20px] text-[24px] text-bluegray_100 text-left w-[100%]"
                    name="group138"
                    placeholder="S^D"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-[54px] items-center justify-start md:ml-[0] ml-[91px] mt-[47px] md:w-[100%] w-[91%]">
                <div className="flex sm:flex-col flex-row sm:gap-[55px] items-center justify-between w-[100%]">
                  <Text className="w-[auto]"></Text>
                  <Text className="w-[auto]"></Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                  <div className="bg-white_A700 flex md:flex-1 items-start justify-end outline outline-[2px] outline-black_900 p-[67px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[56%]">
                    <Input
                      wrapClassName="md:ml-[0] ml-[83px] mt-[4px] w-[49%]"
                      className="font-normal leading-[normal] md:text-[22px] not-italic p-[0] placeholder:text-bluegray_100 sm:text-[20px] text-[24px] text-bluegray_100 text-left w-[100%]"
                      name="promptlegend"
                      placeholder="Prompt Legend"
                    ></Input>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 items-center justify-start outline outline-[2px] outline-black_900 p-[69px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[38%]">
                    <Input
                      wrapClassName=""
                      className="font-normal leading-[normal] md:text-[22px] not-italic p-[0] placeholder:text-bluegray_100 sm:text-[20px] text-[24px] text-bluegray_100 text-left w-[100%]"
                      name="instructions"
                      placeholder="Instructions"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[10px] justify-start md:w-[100%] w-[5%]">
              <Text
                className="common-pointer bg-white_A700 flex h-[40px] items-center justify-center md:ml-[0] ml-[12px] not-italic outline outline-[1px] outline-black_900 rounded-[50%] text-black_900 text-center w-[40px]"
                variant="body2"
                onClick={() => navigate("/")}
              >
                Logout
              </Text>
              <Img
                src="images/img_scrollbar.svg"
                className="h-[373px] w-[auto]"
                alt="scrollbar"
              />
            </div>
          </div>
          <Button
            className="common-pointer bg-green_A700 cursor-pointer font-normal leading-[normal] min-w-[207px] md:ml-[0] ml-[871px] mr-[20px] not-italic py-[6px] rounded-[21px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[auto]"
            onClick={() => navigate("/programdetailsentrymasstrialtargets")}
          >
            Finish
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProgramDetailsEntryMassTrialPage;
