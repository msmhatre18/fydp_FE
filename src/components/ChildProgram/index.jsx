import React from "react";
import './../../styles/ProgramRow.css';
import { Text, Button } from "components";

const ChildProgram = (props) => {
  return (
    <>
      <div className = {`program-row ${props.className}`}>
        <div className="flex md:flex-col flex-row gap-[29px] items-end justify-between md:w-[100%] w-[99%]">
          <Text
            className="font-inter flex-row items-start justify-center mb-[15px] md:mt-[0] mt-[2px] not-italic text-black_900 text-left w-[auto]"
            as="h4"
            variant="h4"
          >
            {props.name}
          </Text>
          <div className="flex md:flex-col flex-row items-start justify-center mb-[7px] md:mt-[2px] mt-[2px]">
            <div className="button-container">
              <button className="create-button">Complete/Start Probe</button>
              <button className="create-button">View History</button>
            </div>
            <Text
              className="font-inter font-normal h-[35px] justify-center mb-[5px] md:mt-[0] mt-[2px] not-italic pb-[3px] pt-[6px] px-[4px] text-left text-white_A700 w-[185px]"
              as="h5"
              variant="h5"
            >
            </Text>
            <Text
              className="font-extrabold font-inter flex-row items-start justify-center mb-[5px] md:mt-[2px] mt-[2px] text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              0%
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ChildProgram.defaultProps = {};

export default ChildProgram;
