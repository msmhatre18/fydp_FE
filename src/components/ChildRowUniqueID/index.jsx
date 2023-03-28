import React from "react";

import { Text } from "components";

const ChildRowUniqueID = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-inter mb-[7px] mt-[2px] not-italic text-black_900 text-center w-[auto]"
          as="h4"
          variant="h4"
        >
          Child 2
        </Text>
        <Text
          className="bottom-[3px] font-inter left-[25px] my-[4px] not-italic relative text-black_900 text-center w-[auto]"
          as="h4"
          variant="h4"
        >
          Unique ID
        </Text>
      </div>
    </>
  );
};

ChildRowUniqueID.defaultProps = {};

export default ChildRowUniqueID;
