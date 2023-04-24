import React from "react";
import LogoutButton from "components/Logout";
import { Text, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const SessionViewProgramTemplatePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-end mx-[auto] pt-[3px] px-[3px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[18px] items-start justify-between max-w-[1120px] mt-[6px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex md:flex-1 flex-col gap-[11px] justify-start md:mt-[0] mt-[11px] md:w-[100%] w-[18%]">
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[9px] md:w-[100%] w-[19%]">
              <div className="bg-black_900 h-[6px] rounded-[3px] w-[100%]"></div>
              <div className="bg-black_900 h-[6px] mt-[4px] rounded-[3px] w-[100%]"></div>
              <div className="bg-black_900 h-[6px] mt-[4px] rounded-[3px] w-[100%]"></div>
            </div>
            <Text
              className="font-normal not-italic text-left text-white_A700 w-[auto]"
              as="h5"
              variant="h5"
            >
              Acquisition Programs
            </Text>
          </div>
          <div className="flex relative md:w-[100%] w-[81%]">
            <Img
              src="images/img_screenshot20220725.png"
              className="h-[788px] my-[auto] object-cover w-[77%]"
              alt="screenshot20220"
            />
            <div className="flex flex-col gap-[10px] items-center justify-start ml-[undefinedpx] w-[11%] z-[1]">
              <div className="flex flex-row gap-[13px] items-center justify-between w-[100%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="common-pointer h-[33px] w-[auto]"
                  onClick={() => navigate(-1)}
                  alt="arrowup"
                />
                <div className="flex justify-end">
                  <LogoutButton />
                </div>
              </div>
            </div>
            <Button className="bg-red_A700 cursor-pointer font-normal leading-[normal] mb-[93px] min-w-[195px] ml-[-3px] mr-[20px] mt-[auto] not-italic py-[3px] rounded-[16px] text-[20px] text-center text-white_A700 w-[auto] z-[1]">
              Finish and Save
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionViewProgramTemplatePage;
