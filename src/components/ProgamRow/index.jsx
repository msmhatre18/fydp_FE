import React from "react";
import './../../styles/ProgramRow.css';
import { Text, Img, Button } from "components";

const ProgamRow = (props) => {
  return (
    <>
      <div className={`program-row ${props.className}`}>
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start ml-[10px] w-[99%]">
          <Text
            className="text-container"
            as="h4"
            variant="h4"
            style = {{color: "black", fontWeight: "bold"}}
          >
            {props.target}
          </Text>
        </div>
        <div className="button-container">
          <button className="create-button">Open Template</button>
          <button className="create-button">Create New</button>
      </div>
      </div>
    </>
  );
};

ProgamRow.defaultProps = {};

export default ProgamRow;
