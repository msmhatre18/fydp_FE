//import React from "react";
import React, { useState } from 'react';

import { Text, Button } from "components";

const DataCollection = (props) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:mt-[0] mt-[5px] md:w-[100%] w-[auto]">
          <Text
            className="font-inter sm:mt-[0] mt-[2px] not-italic text-black_900 text-left w-[auto]"
            as="h4"
            variant="h4"
          >
            {props.target}
          </Text>
          <Text
            className="font-inter sm:ml-[0] ml-[91px] sm:mt-[0] mt-[2px] not-italic text-black_900 text-left w-[auto]"
            as="h4"
            variant="h4"
          >
            Child Response?
          </Text>
          <label>
            <input
              type="radio"
              value="Y"
              checked={selectedOption === 'Y'}
              onChange={handleOptionChange}
            />
            Y
         </label>
         <label>
            <input
              type="radio"
              value="N"
              checked={selectedOption === 'N'}
              onChange={handleOptionChange}
            />
            N
         </label>
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