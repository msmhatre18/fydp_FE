import React from "react";

import { Img, Text, SelectBox, List, Line } from "components";
import { useNavigate } from "react-router-dom";

const AddClienttoPractitionerPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[6px] w-[100%]">
        <div className="flex flex-col gap-[25px] items-center justify-start max-w-[1102px] mb-[206px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex sm:flex-col flex-row sm:gap-[40px] items-end justify-between w-[100%]">
            <Img
              src="images/img_arrowup.svg"
              className="common-pointer h-[33px] mb-[33px] sm:mt-[0] mt-[7px] w-[auto]"
              onClick={() => navigate(-1)}
              alt="arrowup"
            />
            <Text
              className="sm:mt-[0] mt-[29px] not-italic text-black_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Add Client to Prac
            </Text>
            <Text
              className="common-pointer bg-white_A700 flex h-[40px] items-center justify-center mb-[33px] not-italic outline outline-[1px] outline-black_900 rounded-[50%] text-black_900 text-center w-[40px]"
              variant="body2"
              onClick={() => navigate("/")}
            >
              Logout
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[15px] items-start justify-start md:w-[100%] w-[85%]">
            <div className="flex flex-col items-center justify-start md:w-[100%] w-[98%]">
              <SelectBox
                className="bg-cover bg-no-repeat h-[56px] p-[10px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group58.svg')" }}
                placeholderClassName=""
                name="column"
                placeholder=""
                isSearchable={true}
                isMulti={false}
              ></SelectBox>
              <List
                className="flex-col gap-[1px] grid items-center w-[97%]"
                orientation="vertical"
              >
                <div className="bg-bluegray_100 border-[1px] border-black_900 border-solid flex flex-row sm:gap-[40px] items-center justify-between my-[0] p-[7px] w-[100%]">
                  <Text
                    className="my-[2px] not-italic text-black_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Patient Name/ID
                  </Text>
                  <div className="bg-green_A700 h-[18px] md:h-[19px] mr-[13px] my-[3px] p-[2px] relative rounded-[50%] w-[18px]">
                    <Line className="absolute bg-white_A700 bottom-[11%] h-[13px] right-[44%] rotate-[90deg] w-[1px]" />
                    <Line className="absolute bg-white_A700 bottom-[44%] h-[1px] left-[11%] rotate-[180deg] w-[73%]" />
                  </div>
                </div>
                <div className="bg-bluegray_100 border-[1px] border-black_900 border-solid flex flex-row sm:gap-[40px] items-center justify-between my-[0] p-[7px] w-[100%]">
                  <Text
                    className="my-[2px] not-italic text-black_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Patient Name/ID
                  </Text>
                  <div className="bg-green_A700 h-[18px] md:h-[19px] mr-[13px] my-[3px] p-[2px] relative rounded-[50%] w-[18px]">
                    <Line className="absolute bg-white_A700 bottom-[11%] h-[13px] right-[44%] rotate-[90deg] w-[1px]" />
                    <Line className="absolute bg-white_A700 bottom-[44%] h-[1px] left-[11%] rotate-[180deg] w-[73%]" />
                  </div>
                </div>
                <div className="bg-bluegray_100 border-[1px] border-black_900 border-solid flex flex-row sm:gap-[40px] items-center justify-between my-[0] p-[7px] w-[100%]">
                  <Text
                    className="my-[2px] not-italic text-black_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Patient Name/ID
                  </Text>
                  <div className="bg-green_A700 h-[18px] md:h-[19px] mr-[13px] my-[3px] p-[2px] relative rounded-[50%] w-[18px]">
                    <Line className="absolute bg-white_A700 bottom-[11%] h-[13px] right-[44%] rotate-[90deg] w-[1px]" />
                    <Line className="absolute bg-white_A700 bottom-[44%] h-[1px] left-[11%] rotate-[180deg] w-[73%]" />
                  </div>
                </div>
                <div className="bg-bluegray_100 border-[1px] border-black_900 border-solid flex flex-row sm:gap-[40px] items-center justify-between my-[0] p-[7px] w-[100%]">
                  <Text
                    className="my-[2px] not-italic text-black_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Patient Name/ID
                  </Text>
                  <div className="bg-green_A700 h-[18px] md:h-[19px] mr-[13px] my-[3px] p-[2px] relative rounded-[50%] w-[18px]">
                    <Line className="absolute bg-white_A700 bottom-[11%] h-[13px] right-[44%] rotate-[90deg] w-[1px]" />
                    <Line className="absolute bg-white_A700 bottom-[44%] h-[1px] left-[11%] rotate-[180deg] w-[73%]" />
                  </div>
                </div>
                <div className="bg-bluegray_100 border-[1px] border-black_900 border-solid flex flex-row sm:gap-[40px] items-center justify-between my-[0] p-[7px] w-[100%]">
                  <Text
                    className="my-[2px] not-italic text-black_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Patient Name/ID
                  </Text>
                  <div className="bg-green_A700 h-[18px] md:h-[19px] mr-[13px] my-[3px] p-[2px] relative rounded-[50%] w-[18px]">
                    <Line className="absolute bg-white_A700 bottom-[11%] h-[13px] right-[44%] rotate-[90deg] w-[1px]" />
                    <Line className="absolute bg-white_A700 bottom-[44%] h-[1px] left-[11%] rotate-[180deg] w-[73%]" />
                  </div>
                </div>
                <div className="bg-bluegray_100 border-[1px] border-black_900 border-solid flex flex-row sm:gap-[40px] items-center justify-between my-[0] p-[7px] w-[100%]">
                  <Text
                    className="my-[2px] not-italic text-black_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Patient Name/ID
                  </Text>
                  <div className="bg-green_A700 h-[18px] md:h-[20px] mb-[2px] mr-[13px] mt-[5px] p-[2px] relative rounded-[50%] w-[18px]">
                    <Line className="absolute bg-white_A700 bottom-[11%] h-[13px] right-[44%] rotate-[90deg] w-[1px]" />
                    <Line className="absolute bg-white_A700 bottom-[44%] h-[1px] left-[11%] rotate-[180deg] w-[73%]" />
                  </div>
                </div>
                <div className="bg-bluegray_100 border-[1px] border-black_900 border-solid flex flex-row sm:gap-[40px] items-center justify-between my-[0] p-[7px] w-[100%]">
                  <Text
                    className="my-[2px] not-italic text-black_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Patient Name/ID
                  </Text>
                  <div className="bg-green_A700 h-[18px] md:h-[19px] mr-[13px] my-[3px] p-[2px] relative rounded-[50%] w-[18px]">
                    <Line className="absolute bg-white_A700 bottom-[11%] h-[13px] right-[44%] rotate-[90deg] w-[1px]" />
                    <Line className="absolute bg-white_A700 bottom-[44%] h-[1px] left-[11%] rotate-[180deg] w-[73%]" />
                  </div>
                </div>
              </List>
            </div>
            <Img
              src="images/img_scrollbar.svg"
              className="h-[373px] md:mt-[0] mt-[55px] w-[auto]"
              alt="scrollbar"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClienttoPractitionerPage;
