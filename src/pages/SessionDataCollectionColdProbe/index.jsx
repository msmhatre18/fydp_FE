import React from "react";

import { Text, Img, Datepicker, Input, Button } from "components";
import DataCollection from "components/DataCollection";
import { useNavigate } from "react-router-dom";
import './../../styles/input.css';
const SessionDataCollectionColdProbePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[9px] w-[100%]">
        <div className="flex flex-col items-center justify-start max-w-[1111px] mb-[48px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-[0] mt-[11px] md:w-[100%] w-[4%]">
              <div className="bg-black_900 h-[6px] rounded-[3px] w-[100%]"></div>
              <div className="bg-black_900 h-[6px] mt-[4px] rounded-[3px] w-[100%]"></div>
              <div className="bg-black_900 h-[6px] mt-[4px] rounded-[3px] w-[100%]"></div>
            </div>
            <Text
              className="md:ml-[0] ml-[406px] md:mt-[0] mt-[10px] not-italic text-black_900 text-center w-[auto]"
              as="h3"
              variant="h3"
            >
              Data Collection Cold Probe
            </Text>
            <Img
              src="images/img_arrowup.svg"
              className="common-pointer h-[33px] md:ml-[0] ml-[349px] md:mt-[0] mt-[4px] w-[auto]"
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
          <div className="flex md:flex-col flex-row gap-[35px] items-start justify-start md:w-[100%] w-[92%]">
            <div className="flex flex-col justify-start md:mt-[0] mt-[40px] md:w-[100%] w-[96%]">
              <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between w-[100%]">
                <Datepicker
                  className="placeholder:bg-transparent bg-white_A700 md:flex-1 font-normal leading-[normal] not-italic outline outline-[2px] outline-black_900 pl-[13px] sm:pr-[20px] pr-[35px] py-[4px] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-bluegray_100 text-bluegray_100 text-left md:w-[100%] w-[auto]"
                  name="group170"
                  placeholder="Session Date"
                ></Datepicker>
                
              </div>
              <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between mt-[53px] w-[100%]">
                <Input
                   wrapClassName="input-box"
                   className="input"
                  name="group172"
                  placeholder="Practitioner Initials"
                ></Input>

              </div>

              <DataCollection target="Cold Probe 1" className="flex flex-row items-end justify-start md:ml-[0] ml-[7px] mt-[40px] md:w-[100%] w-[78%]" />
              <DataCollection target="Cold Probe 2" className="flex flex-row items-end justify-start md:ml-[0] ml-[7px] mt-[40px] md:w-[100%] w-[78%]" />
              <DataCollection className="flex flex-row items-end justify-start md:ml-[0] ml-[7px] mt-[40px] md:w-[100%] w-[78%]" />
              <DataCollection className="flex flex-row items-end justify-start md:ml-[0] ml-[7px] mt-[40px] md:w-[100%] w-[78%]" />
              <DataCollection className="flex flex-row items-end justify-start md:ml-[0] ml-[7px] mt-[40px] md:w-[100%] w-[78%]" />

              <div className="flex flex-row gap-[28px] items-center justify-start md:ml-[0] ml-[7px] mt-[38px] w-[10%] md:w-[100%]">
                <Img
                  src="images/img_arrow15.svg"
                  className="h-[30px] relative top-[50px] w-[auto]"
                  alt="arrowFifteen"
                />
                <Img
                  src="images/img_arrow14.svg"
                  className="h-[30px] relative top-[50px] w-[auto]"
                  alt="arrowFourteen"
                />
              </div>
              <Button className="bg-red_A700 cursor-pointer font-normal leading-[normal] min-w-[195px] md:ml-[0] ml-[764px] mr-[12px] mt-[68px] not-italic py-[3px] rounded-[16px] text-[20px] text-center text-white_A700 w-[auto]">
                Finish and Save
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

export default SessionDataCollectionColdProbePage;
