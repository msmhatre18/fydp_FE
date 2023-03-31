//import React from "react";
import React, { useState } from 'react';
import './../../styles/DataCollection.css';
import { Text, Button } from "components";

const DataCollection = (props) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className={`data-collection ${props.className}`}>
        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:mt-[0] mt-[5px] md:w-[100%] w-[auto]">
          <Text
            className="text-container"
            as="h4"
            variant="h4"
          >
            {props.target}
          </Text>
          <Text
            className="text-container"
            as="h5"
            variant="h5"
          >
            Child Response?
          </Text>
          <label className="radio-container">
            <input
              type="radio"
              value="Y"
              checked={selectedOption === 'Y'}
              onChange={handleOptionChange}
            />
            Y
         </label>
         <label className="radio-container">
            <input
              type="radio"
              value="N"
              checked={selectedOption === 'N'}
              onChange={handleOptionChange}
            />
            N
         </label>
        </div>
        <Button className="replace-button" style={{ display: "block", margin: "auto", textAlign: "center", verticalAlign: "middle" }}>Replace</Button>
      </div>
    </>
  );
};

DataCollection.defaultProps = {};
export default DataCollection;

