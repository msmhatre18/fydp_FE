import React from "react";

import { Img, Text } from "components";

const BehaviorDataHistoryPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-end mx-[auto] pt-[6px] w-[100%]">
        <div className="flex flex-col gap-[21px] items-center justify-start w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start max-w-[1110px] mx-[auto] md:px-[20px] w-[100%]">
            <Img
              src="images/img_arrowup.svg"
              className="h-[33px] md:mt-[0] mt-[11px] w-[auto]"
              alt="arrowup"
            />
            <Text
              className="md:ml-[0] ml-[308px] md:mt-[0] mt-[14px] not-italic text-black_900 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Behavior Data for Child 1
            </Text>
            <Text
              className="bg-white_A700 flex h-[40px] items-center justify-center mb-[13px] md:ml-[0] ml-[351px] not-italic outline outline-[1px] outline-black_900 rounded-[50%] text-black_900 text-center w-[40px]"
              variant="body2"
            >
              Logout
            </Text>
          </div>
          <div className="bg-bluegray_100 flex flex-col gap-[54px] items-center justify-end p-[227px] sm:px-[20px] md:px-[40px] w-[100%]">
            <Text
              className="mt-[84px] not-italic text-black_900 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Past Behavior Data for Child 1
            </Text>
            <Text
              className="not-italic text-black_900 text-left w-[auto]"
              as="h4"
              variant="h4"
            >
              Embed link for behavior data excel sheet
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default BehaviorDataHistoryPage;
