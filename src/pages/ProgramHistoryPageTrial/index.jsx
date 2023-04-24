import React from "react";
import LogoutButton from "components/Logout";

import { Img, Text } from "components";

const ProgramHistoryPageTrialPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-end mx-[auto] pt-[6px] w-[100%]">
        <div className="flex flex-col gap-[18px] items-center justify-start w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start max-w-[1110px] mx-[auto] md:px-[20px] w-[100%]">
            <Img
              src="images/img_arrowup.svg"
              className="h-[33px] md:mt-[0] mt-[11px] w-[auto]"
              alt="arrowup"
            />
            <Text
              className="md:ml-[0] ml-[308px] md:mt-[0] mt-[17px] not-italic text-black_900 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Program Name/ID for Child ID
            </Text>
            <div className="flex justify-end">
              <LogoutButton />
            </div>
          </div>
          <div className="bg-bluegray_100 flex flex-col items-center justify-end p-[77px] sm:px-[20px] md:px-[40px] w-[100%]">
            <Text
              className="mt-[238px] not-italic text-black_900 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Past Session History 2 for Program{" "}
            </Text>
            <Text
              className="mt-[55px] not-italic text-black_900 text-left w-[auto]"
              as="h4"
              variant="h4"
            >
              Embed link for cold probe/mass trial excel
            </Text>
            <Img
              src="images/img_arrow14_black_900_3x46.svg"
              className="h-[3px] mt-[143px] w-[auto]"
              alt="arrowFourteen"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramHistoryPageTrialPage;
