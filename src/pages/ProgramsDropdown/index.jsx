import React from "react";

import { Text, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const ProgramsDropdownPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 font-inter h-[744px] mx-[auto] p-[13px] relative w-[100%]">
        <Text
          className="common-pointer absolute bg-white_A700 flex h-[40px] items-center justify-center not-italic outline outline-[1px] outline-black_900 right-[1%] rounded-[50%] text-black_900 text-center top-[2%] w-[40px]"
          variant="body2"
          onClick={() => navigate("/")}
        >
          Logout
        </Text>
        <div className="absolute flex inset-[0] justify-center m-[auto] max-w-[1076px] md:px-[20px] w-[100%]">
          <aside className="flex flex-col md:hidden justify-start my-[auto] w-[7%]">
            <Img
              src="images/img_arrowup.svg"
              className="common-pointer h-[33px] mr-[25px] w-[auto]"
              onClick={() => navigate("/homepagepatients")}
              alt="arrowup"
            />
            <Button className="bg-transparent cursor-pointer font-normal leading-[normal] min-w-[45px] md:ml-[0] ml-[20px] mt-[642px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-center w-[auto]">
              Add
            </Button>
          </aside>
          <div
            className="bg-cover bg-no-repeat flex h-[66px] items-center justify-start mb-[53px] ml-[-65.47px] mr-[auto] mt-[auto] p-[12px] w-[100%] z-[1]"
            style={{ backgroundImage: "url('images/img_group163.svg')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-[40px] items-end justify-between md:w-[100%] w-[98%]">
              <Text
                className="md:mt-[0] mt-[11px] not-italic text-black_900 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Program Name/ID 9 Template
              </Text>
              <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] not-italic py-[6px] rounded-[21px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[auto]">
                Create New
              </Button>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex h-[67px] items-center justify-end mb-[119px] ml-[-65.47px] mr-[auto] mt-[auto] p-[11px] w-[100%] z-[1]"
            style={{ backgroundImage: "url('images/img_group163.svg')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-[40px] items-end justify-between mt-[3px] md:w-[100%] w-[97%]">
              <Text
                className="md:mt-[0] mt-[10px] not-italic text-black_900 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Program Name/ID 8 Template
              </Text>
              <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] not-italic py-[6px] rounded-[21px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[auto]">
                Create New
              </Button>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex h-[66px] items-center justify-start mb-[186px] ml-[-65.47px] mr-[auto] mt-[auto] p-[12px] w-[100%] z-[1]"
            style={{ backgroundImage: "url('images/img_group163.svg')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-[40px] items-end justify-between md:w-[100%] w-[97%]">
              <Text
                className="md:mt-[0] mt-[11px] not-italic text-black_900 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Program Name/ID 7 Template
              </Text>
              <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] not-italic py-[6px] rounded-[21px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[auto]">
                Create New
              </Button>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex h-[66px] items-center justify-end mb-[252px] ml-[-65.47px] mr-[auto] mt-[auto] p-[10px] w-[100%] z-[1]"
            style={{ backgroundImage: "url('images/img_group163.svg')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-[40px] items-end justify-between mt-[4px] md:w-[100%] w-[97%]">
              <Text
                className="mb-[3px] md:mt-[0] mt-[8px] not-italic text-black_900 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Program Name/ID 6 Template
              </Text>
              <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] not-italic py-[6px] rounded-[21px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[auto]">
                Create New
              </Button>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex h-[67px] items-center justify-start ml-[-65.47px] mr-[auto] my-[auto] p-[12px] w-[100%] z-[1]"
            style={{ backgroundImage: "url('images/img_group163.svg')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-[40px] items-end justify-between md:w-[100%] w-[98%]">
              <Text
                className="mb-[3px] md:mt-[0] mt-[8px] not-italic text-black_900 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Program Name/ID 5 Template
              </Text>
              <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] not-italic py-[6px] rounded-[21px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[auto]">
                Create New
              </Button>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex h-[66px] items-center justify-start ml-[-65.47px] mr-[auto] mt-[254px] p-[12px] w-[100%] z-[1]"
            style={{ backgroundImage: "url('images/img_group163.svg')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-[40px] items-end justify-between md:w-[100%] w-[98%]">
              <Text
                className="mb-[3px] md:mt-[0] mt-[8px] not-italic text-black_900 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Program Name/ID 4 Template
              </Text>
              <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] not-italic py-[6px] rounded-[21px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[auto]">
                Create New
              </Button>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex h-[66px] items-center justify-end ml-[-65.47px] mr-[auto] mt-[188px] p-[11px] w-[100%] z-[1]"
            style={{ backgroundImage: "url('images/img_group163.svg')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[2px] md:w-[100%] w-[97%]">
              <Text
                className="common-pointer not-italic text-black_900 text-left w-[auto]"
                as="h4"
                variant="h4"
                onClick={() => navigate("/sessionviewprogramtemplate")}
              >
                Program Name/ID 3 Template
              </Text>
              <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] not-italic py-[6px] rounded-[21px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[auto]">
                Create New
              </Button>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex h-[67px] items-center justify-start ml-[-65.47px] mr-[auto] mt-[121px] p-[12px] w-[100%] z-[1]"
            style={{ backgroundImage: "url('images/img_group163.svg')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-[40px] items-end justify-between md:w-[100%] w-[97%]">
              <Text
                className="mb-[3px] md:mt-[0] mt-[8px] not-italic text-black_900 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Program Name/ID 2 Template
              </Text>
              <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] not-italic py-[6px] rounded-[21px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[auto]">
                Create New
              </Button>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex h-[64px] items-center justify-start ml-[-65.47px] mr-[auto] mt-[57px] p-[11px] w-[100%] z-[1]"
            style={{ backgroundImage: "url('images/img_group163.svg')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-[40px] items-end justify-between md:w-[100%] w-[97%]">
              <Text
                className="mb-[3px] md:mt-[0] mt-[8px] not-italic text-black_900 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Program Name/ID 1 Template
              </Text>
              <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] not-italic py-[6px] rounded-[21px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[auto]">
                Create New
              </Button>
            </div>
          </div>
          <Text
            className="ml-[undefinedpx] mr-[auto] not-italic text-black_900 text-center w-[auto] z-[1]"
            as="h2"
            variant="h2"
          >
            Programs
          </Text>
        </div>
        <Img
          src="images/img_scrollbar.svg"
          className="absolute h-[373px] right-[1%] top-[10%] w-[auto]"
          alt="scrollbar"
        />
      </div>
    </>
  );
};

export default ProgramsDropdownPage;
