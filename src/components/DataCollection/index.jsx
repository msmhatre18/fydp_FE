import React, { useState, useEffect } from 'react';
import './../../styles/DataCollection.css';
import { Text, Button } from "components";

const DataCollection = (props) => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => props.handleRadioChange(selectedOption, props.target), [selectedOption]);
  return (
    <>
      <div className={`data-collection ${props.className}`}>
        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:mt-[0] mt-[5px] md:w-[100%] w-[auto]">
          <Text
            className="text-container-session"
            as="h4"
            variant="h4"
          >
            {props.isInMaintenance ? <mark>{props.target}</mark> : props.target}
          </Text>
          <Text
            className="text-container-session"
            as="h5"
            variant="h5"
          >
            Is Met
          </Text>
          <label className="radio-container">
            <input
              type="radio"
              value="Y"
              checked={props.isRecorded && props.isMet}
              onChange={handleOptionChange}
            />
            Y
         </label>
         <label className="radio-container">
            <input
              type="radio"
              value="N"
              checked={props.isRecorded && !props.isMet}
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

