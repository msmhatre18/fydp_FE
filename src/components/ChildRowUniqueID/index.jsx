import React from "react";
import './../../styles/Homepage.css';
import { Text } from "components";

const ChildRowUniqueID = (props) => {
  return (
    <>
      <div className={`home-page ${props.className}`}>
        <Text
          className="text-container"
          as="h4"
          variant="h4"
        >
          {props.prop1}
        </Text>
        <Text
          className="text-container"
          as="h5"
          variant="h5"
        >
          {props.prop2}
        </Text>
      </div>
    </>
  );
};

ChildRowUniqueID.defaultProps = {};

export default ChildRowUniqueID;
