import React from "react";

import { Text, Button } from "components";

const DataCollection = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:mt-[0] mt-[5px] md:w-[100%] w-[auto]">
          <Text
            className="font-inter sm:mt-[0] mt-[2px] not-italic text-black_900 text-left w-[auto]"
            as="h4"
            variant="h4"
          >
            Target
          </Text>
          <Text
            className="font-inter sm:ml-[0] ml-[91px] sm:mt-[0] mt-[2px] not-italic text-black_900 text-left w-[auto]"
            as="h4"
            variant="h4"
          >
            Child Response?
          </Text>
          <Text
            className="font-inter left-[20px] mb-[2px] sm:ml-[0] ml-[9px] not-italic relative text-black_900 text-left w-[auto]"
            as="h4"
            variant="h4"
          >
            Y
          </Text>
          <Text
            className="font-inter left-[25px] mb-[2px] sm:ml-[0] ml-[26px] not-italic relative text-black_900 text-left w-[auto]"
            as="h4"
            variant="h4"
          >
            N
          </Text>
        </div>
        <Button className="bg-red_A700 cursor-pointer font-inter font-normal leading-[normal] left-[125px] mb-[2px] min-w-[185px] not-italic py-[5px] relative text-[20px] text-center text-white_A700 top-[] w-[auto]">
          Replace
        </Button>
      </div>
    </>
  );
};

DataCollection.defaultProps = {};

export default DataCollection;
