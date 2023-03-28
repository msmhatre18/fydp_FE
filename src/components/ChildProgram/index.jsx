import React from "react";

import { Text, Button } from "components";

const ChildProgram = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_group163.svg')" }}
      >
        <div className="flex md:flex-col flex-row gap-[29px] items-end justify-between md:w-[100%] w-[99%]">
          <Text
            className="font-inter mb-[3px] md:mt-[0] mt-[8px] not-italic text-black_900 text-left w-[auto]"
            as="h4"
            variant="h4"
          >
            Program Name/ID
          </Text>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[78%]">
            <Button className="bg-blue_600 cursor-pointer font-inter font-normal leading-[normal] min-w-[254px] not-italic py-[8px] rounded-[21px] text-[20px] text-center text-white_A700 w-[auto]">
              Complete/Start Probe
            </Button>
            <Button className="bg-blue_600 cursor-pointer font-inter font-normal leading-[normal] min-w-[254px] not-italic py-[8px] rounded-[21px] text-[20px] text-center text-white_A700 w-[auto]">
              View History
            </Button>
            <Text
              className="bg-red_A700 font-inter font-normal h-[35px] justify-center mb-[5px] md:mt-[0] mt-[2px] not-italic pb-[3px] pt-[6px] px-[4px] text-left text-white_A700 w-[185px]"
              as="h5"
              variant="h5"
            >
              Mastered Program
            </Text>
            <Text
              className="font-extrabold font-inter md:mt-[0] mt-[7px] text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              67%
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ChildProgram.defaultProps = {};

export default ChildProgram;
