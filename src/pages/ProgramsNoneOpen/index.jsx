import React from "react";

import { Img, Text, List, Button } from "components";
import { useNavigate } from "react-router-dom";

const ProgramsNoneOpenPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[13px] w-[100%]">
        <div className="flex flex-col gap-[12px] items-center justify-start max-w-[1105px] mb-[8px] mt-[4px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between w-[100%]">
            <Img
              src="images/img_arrowup.svg"
              className="common-pointer h-[33px] w-[auto]"
              onClick={() => navigate("/homepagepatients")}
              alt="arrowup"
            />
            <Text
              className="not-italic text-black_900 text-center w-[auto]"
              as="h2"
              variant="h2"
            >
              Programs for Child 1
            </Text>
            <Text
              className="common-pointer bg-white_A700 flex h-[40px] items-center justify-center mb-[4px] not-italic outline outline-[1px] outline-black_900 rounded-[50%] text-black_900 text-center w-[40px]"
              variant="body2"
              onClick={() => navigate("/")}
            >
              Logout
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[17px] items-start justify-between w-[100%]">
            <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[auto]">
              <List
                className="flex-col gap-[1px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div
                  className="bg-cover bg-no-repeat flex flex-1 h-[64px] items-center justify-end my-[0] p-[10px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group163.svg')" }}
                >
                  <div className="flex md:flex-col flex-row gap-[29px] items-end justify-between mt-[2px] md:w-[100%] w-[99%]">
                    <Text
                      className="mb-[4px] md:mt-[0] mt-[7px] not-italic text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Program Name/ID
                    </Text>
                    <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[78%]">
                      <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] not-italic py-[8px] rounded-[21px] text-[20px] text-center text-white_A700 w-[auto]">
                        Complete/Start Probe
                      </Button>
                      <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] not-italic py-[8px] rounded-[21px] text-[20px] text-center text-white_A700 w-[auto]">
                        View History
                      </Button>
                      <Text
                        className="bg-red_A700 font-normal h-[35px] justify-center mb-[5px] md:mt-[0] mt-[2px] not-italic pb-[3px] pt-[6px] px-[4px] text-left text-white_A700 w-[185px]"
                        as="h5"
                        variant="h5"
                      >
                        Mastered Program
                      </Text>
                      <Text
                        className="font-extrabold md:mt-[0] mt-[7px] text-black_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        80%
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 h-[67px] items-center justify-start my-[0] p-[12px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group163.svg')" }}
                >
                  <div className="flex md:flex-col flex-row gap-[29px] items-end justify-between md:w-[100%] w-[99%]">
                    <Text
                      className="mb-[3px] md:mt-[0] mt-[8px] not-italic text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Program Name/ID
                    </Text>
                    <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[78%]">
                      <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] not-italic py-[8px] rounded-[21px] text-[20px] text-center text-white_A700 w-[auto]">
                        Complete/Start Probe
                      </Button>
                      <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] not-italic py-[8px] rounded-[21px] text-[20px] text-center text-white_A700 w-[auto]">
                        View History
                      </Button>
                      <Text
                        className="bg-red_A700 font-normal h-[35px] justify-center mb-[5px] md:mt-[0] mt-[2px] not-italic pb-[3px] pt-[6px] px-[4px] text-left text-white_A700 w-[185px]"
                        as="h5"
                        variant="h5"
                      >
                        Mastered Program
                      </Text>
                      <Text
                        className="font-extrabold md:mt-[0] mt-[7px] text-black_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        67%
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 h-[66px] items-center justify-end my-[0] p-[11px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group163.svg')" }}
                >
                  <div className="flex md:flex-col flex-row gap-[29px] items-end justify-between mt-[2px] md:w-[100%] w-[99%]">
                    <Text
                      className="mb-[4px] md:mt-[0] mt-[7px] not-italic text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Program Name/ID
                    </Text>
                    <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[78%]">
                      <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] not-italic py-[8px] rounded-[21px] text-[20px] text-center text-white_A700 w-[auto]">
                        Complete/Start Probe
                      </Button>
                      <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] not-italic py-[8px] rounded-[21px] text-[20px] text-center text-white_A700 w-[auto]">
                        View History
                      </Button>
                      <Text
                        className="bg-red_A700 font-normal h-[35px] justify-center mb-[5px] md:mt-[0] mt-[2px] not-italic pb-[3px] pt-[6px] px-[4px] text-left text-white_A700 w-[185px]"
                        as="h5"
                        variant="h5"
                      >
                        Mastered Program
                      </Text>
                      <Text
                        className="font-extrabold md:mt-[0] mt-[7px] text-black_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        60%
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 h-[66px] items-center justify-end my-[0] p-[11px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group163.svg')" }}
                >
                  <div className="flex md:flex-col flex-row gap-[29px] items-end justify-between mt-[2px] md:w-[100%] w-[99%]">
                    <Text
                      className="mb-[4px] md:mt-[0] mt-[7px] not-italic text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Program Name/ID
                    </Text>
                    <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[78%]">
                      <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] not-italic py-[8px] rounded-[21px] text-[20px] text-center text-white_A700 w-[auto]">
                        Complete/Start Probe
                      </Button>
                      <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] not-italic py-[8px] rounded-[21px] text-[20px] text-center text-white_A700 w-[auto]">
                        View History
                      </Button>
                      <Text
                        className="bg-red_A700 font-normal h-[35px] justify-center mb-[5px] md:mt-[0] mt-[2px] not-italic pb-[3px] pt-[6px] px-[4px] text-left text-white_A700 w-[185px]"
                        as="h5"
                        variant="h5"
                      >
                        Mastered Program
                      </Text>
                      <Text
                        className="font-extrabold md:mt-[0] mt-[7px] text-black_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        50%
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 h-[67px] items-center justify-end my-[0] p-[12px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group163.svg')" }}
                >
                  <div className="flex md:flex-col flex-row gap-[29px] items-end justify-between md:w-[100%] w-[99%]">
                    <Text
                      className="mb-[2px] md:mt-[0] mt-[9px] not-italic text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Program Name/ID
                    </Text>
                    <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[78%]">
                      <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] not-italic py-[8px] rounded-[21px] text-[20px] text-center text-white_A700 w-[auto]">
                        Complete/Start Probe
                      </Button>
                      <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] not-italic py-[8px] rounded-[21px] text-[20px] text-center text-white_A700 w-[auto]">
                        View History
                      </Button>
                      <Text
                        className="bg-red_A700 font-normal h-[35px] justify-center mb-[5px] md:mt-[0] mt-[2px] not-italic pb-[3px] pt-[6px] px-[4px] text-left text-white_A700 w-[185px]"
                        as="h5"
                        variant="h5"
                      >
                        Mastered Program
                      </Text>
                      <Text
                        className="font-extrabold md:mt-[0] mt-[7px] text-black_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        20%
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <List
                className="flex-col gap-[1px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div
                  className="bg-cover bg-no-repeat flex flex-1 h-[66px] items-start justify-start my-[0] p-[11px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group163.svg')" }}
                >
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mb-[2px] md:ml-[0] ml-[9px] md:w-[100%] w-[88%]">
                    <Text
                      className="md:mt-[0] mt-[7px] not-italic text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Program Name/ID
                    </Text>
                    <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] left-[45px] min-w-[254px] md:ml-[0] ml-[300px] not-italic py-[8px] relative rounded-[21px] text-[20px] text-center text-white_A700 w-[auto]">
                      View History
                    </Button>
                    <Text
                      className="font-extrabold md:ml-[0] ml-[74px] md:mt-[0] mt-[11px] text-black_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Mastered
                    </Text>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 h-[66px] items-start justify-end my-[0] p-[11px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group163.svg')" }}
                >
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-end justify-start md:ml-[0] ml-[9px] mr-[auto] mt-[2px] md:w-[100%] w-[88%]">
                    <Text
                      className="mb-[4px] md:mt-[0] mt-[7px] not-italic text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Program Name/ID
                    </Text>
                    <Button className="bg-blue_600 bottom-[25px] cursor-pointer font-normal leading-[normal] left-[45px] min-w-[254px] md:ml-[0] ml-[300px] not-italic py-[8px] relative rounded-[21px] text-[20px] text-center text-white_A700 w-[auto]">
                      View History
                    </Button>
                    <Text
                      className="bottom-[30px] font-extrabold md:ml-[0] ml-[74px] md:mt-[0] my-[8px] relative text-black_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Mastered
                    </Text>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 h-[67px] items-start justify-start my-[0] p-[12px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group163.svg')" }}
                >
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[8px] md:w-[100%] w-[88%]">
                    <Text
                      className="md:mt-[0] mt-[8px] not-italic text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Program Name/ID
                    </Text>
                    <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] left-[45px] min-w-[254px] md:ml-[0] ml-[300px] not-italic py-[8px] relative rounded-[21px] text-[20px] text-center text-white_A700 w-[auto]">
                      View History
                    </Button>
                    <Text
                      className="font-extrabold md:ml-[0] ml-[74px] md:mt-[0] mt-[12px] text-black_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Mastered
                    </Text>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 h-[66px] items-start justify-end my-[0] p-[10px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group163.svg')" }}
                >
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[10px] mr-[auto] mt-[4px] md:w-[100%] w-[88%]">
                    <Text
                      className="md:mt-[0] mt-[6px] not-italic text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Program Name/ID
                    </Text>
                    <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] left-[45px] min-w-[254px] md:ml-[0] ml-[300px] not-italic py-[8px] relative rounded-[21px] text-[20px] text-center text-white_A700 w-[auto]">
                      View History
                    </Button>
                    <Text
                      className="font-extrabold md:ml-[0] ml-[74px] md:mt-[0] mt-[4px] text-black_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Mastered
                    </Text>
                  </div>
                </div>
              </List>
              <Button className="bg-transparent cursor-pointer font-normal leading-[normal] min-w-[45px] md:ml-[0] ml-[20px] mt-[23px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-center w-[auto]">
                Add
              </Button>
            </div>
            <Img
              src="images/img_scrollbar.svg"
              className="h-[373px] w-[auto]"
              alt="scrollbar"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramsNoneOpenPage;
