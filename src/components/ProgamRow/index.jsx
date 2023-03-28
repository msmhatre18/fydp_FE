import React from "react";

import { Text, Img, Button } from "components";

const ProgamRow = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start ml-[10px] w-[99%]">
          <Text
            className="font-inter md:mt-[0] mt-[9px] not-italic text-black_900 text-left w-[auto]"
            as="h4"
            variant="h4"
          >
            Program Name/ID 2 Template
          </Text>
          <Img
            src="images/img_arrowdown.svg"
            className="h-[20px] md:ml-[0] ml-[10px] md:mt-[0] mt-[12px] w-[auto]"
            onClick={props?.onClick}
            alt="arrowdown"
          />
          <Button className="bg-blue_600 cursor-pointer font-inter font-normal leading-[normal] min-w-[254px] md:ml-[0] ml-[408px] not-italic py-[6px] rounded-[21px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[auto]">
            Create New
          </Button>
        </div>
      </div>
    </>
  );
};

ProgamRow.defaultProps = {};

export default ProgamRow;
