import React from "react";
import './../../styles/DataCollection.css';
import { Text, Button } from "components";

const BehaviorDashData = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-inter mt-[27px] not-italic text-black_900 text-center w-[auto]"
          as="h4"
          variant="h4"
        >
          Behaviour Data of {props.target}
        </Text>
        <Button className="replace-button">
          View
        </Button>
      </div>
    </>
  );
};

BehaviorDashData.defaultProps = {};

export default BehaviorDashData;
