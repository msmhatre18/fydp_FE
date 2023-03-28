import React from "react";

import { Img, Text, Button } from "components";
import ProgamRow from "components/ProgamRow";
import { useNavigate } from "react-router-dom";

const ProgramsDropdownOpenPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter gap-[12px] items-center justify-end mx-[auto] pt-[11px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start max-w-[1105px] mx-[auto] md:px-[20px] w-[100%]">
          <Img
            src="images/img_arrowup.svg"
            className="h-[33px] md:mt-[0] mt-[3px] w-[auto]"
            alt="arrowup"
          />
          <Text
            className="md:ml-[0] ml-[415px] md:mt-[0] mt-[8px] not-italic text-black_900 text-center w-[auto]"
            as="h2"
            variant="h2"
          >
            Programs
          </Text>
          <Text
            className="bg-white_A700 flex h-[40px] items-center justify-center mb-[12px] md:ml-[0] ml-[446px] not-italic outline outline-[1px] outline-black_900 rounded-[50%] text-black_900 text-center w-[40px]"
            variant="body2"
          >
            Logout
          </Text>
        </div>
        <div className="md:h-[535px] h-[959px] md:px-[20px] relative w-[100%]">
          <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[98%]">
            <div className="flex md:flex-col flex-row gap-[14px] items-start justify-between w-[100%]">
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 h-[67px] items-center justify-end p-[10px] md:w-[100%] w-[auto]"
                style={{ backgroundImage: "url('images/img_group163.svg')" }}
              >
                <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[5px] md:w-[100%] w-[99%]">
                  <Text
                    className="not-italic text-black_900 text-left w-[auto]"
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
              <Img
                src="images/img_scrollbar.svg"
                className="h-[373px] md:mt-[0] mt-[15px] w-[auto]"
                alt="scrollbar"
              />
            </div>
          </div>
          <div className="absolute bottom-[0] md:h-[535px] h-[826px] inset-x-[0] mx-[auto] w-[100%]">
            <div className="absolute flex flex-col inset-[0] justify-center m-[auto] md:w-[100%] w-[96%]">
              <div className="bg-blue_600 border-[2px] border-black_900 border-solid flex items-end justify-start mx-[auto] p-[14px] w-[100%]">
                <div className="flex items-center justify-start mb-[73px] md:w-[100%] w-[2%]">
                  <Img
                    src="images/img_scrollbar.svg"
                    className="h-[190px] w-[auto]"
                    alt="scrollbar_One"
                  />
                </div>
              </div>
              <Img
                src="images/img_screenshot20220725.png"
                className="h-[788px] mt-[-253px] mx-[auto] object-cover w-[64%] z-[1]"
                alt="screenshot20220"
              />
            </div>
            <div className="absolute bg-white_A700 bottom-[35%] flex flex-row gap-[33px] inset-x-[0] items-start justify-start mx-[auto] p-[5px] w-[100%]">
              <Button className="bg-transparent cursor-pointer font-normal leading-[normal] mb-[3px] min-w-[44px] ml-[32px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-center w-[auto]">
                Edit
              </Button>
              <Button className="bg-transparent cursor-pointer font-normal leading-[normal] min-w-[47px] my-[2px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-center w-[auto]">
                Add
              </Button>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat bottom-[40%] flex h-[67px] inset-x-[0] items-center justify-end mx-[auto] p-[9px] w-[96%]"
              style={{ backgroundImage: "url('images/img_group163.svg')" }}
            >
              <div className="flex md:flex-col flex-row md:gap-[40px] items-end justify-between mt-[7px] md:w-[100%] w-[99%]">
                <Text
                  className="mb-[4px] md:mt-[0] mt-[7px] not-italic text-black_900 text-left w-[auto]"
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
              className="absolute bg-cover bg-no-repeat flex h-[67px] inset-x-[0] items-center justify-end mx-[auto] p-[12px] top-[35%] w-[96%]"
              style={{ backgroundImage: "url('images/img_group163.svg')" }}
            >
              <div className="flex md:flex-col flex-row md:gap-[40px] items-end justify-between md:w-[100%] w-[99%]">
                <Text
                  className="mb-[4px] md:mt-[0] mt-[7px] not-italic text-black_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Program Name/ID 3 Template
                </Text>
                <Button className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] not-italic py-[6px] rounded-[21px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[auto]">
                  Create New
                </Button>
              </div>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex h-[67px] inset-x-[0] items-center justify-end mx-[auto] p-[12px] top-[43%] w-[96%]"
              style={{ backgroundImage: "url('images/img_group163.svg')" }}
            >
              <div className="flex md:flex-col flex-row md:gap-[40px] items-end justify-between md:w-[100%] w-[99%]">
                <Text
                  className="mb-[4px] md:mt-[0] mt-[7px] not-italic text-black_900 text-left w-[auto]"
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
          </div>
          <ProgamRow
            className="absolute bg-bluegray_100 flex flex-row inset-x-[0] items-center justify-start mx-[auto] outline outline-[2px] outline-black_900 p-[11px] top-[7%] sm:w-[100%] w-[96%]"
            onClick={() => navigate("/sessionviewprogramtemplate")}
          />
        </div>
      </div>
    </>
  );
};

export default ProgramsDropdownOpenPage;
