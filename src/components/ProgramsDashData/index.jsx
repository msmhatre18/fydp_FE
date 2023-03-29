import React from "react";
import './../../styles/DataCollection.css';
import { Text, Button } from "components";

const ProgramsDashData = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-inter mt-[29px] not-italic text-black_900 text-center w-[auto]"
          as="h4"
          variant="h4"
        >
          Programs for {props.target}
        </Text>
        <Button className="replace-button">
          View
        </Button>
      </div>
    </>
  );
};

ProgramsDashData.defaultProps = {};

export default ProgramsDashData;
