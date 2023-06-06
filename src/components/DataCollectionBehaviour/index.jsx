import React, { useState, useEffect } from 'react';
import './../../styles/DataCollection.css';
import { Text, Button } from "components";

const DataCollectionBehaviour = (props) => {
  const[frequency, setFrequency] = useState(props.frequency); 
  let counterButtons =(
            <>
            <Button className="y-button" onClick={() => handleFrequencyChange("+")} style={{ display: "block", margin: "auto", textAlign: "center", verticalAlign: "middle" }}>+</Button>
            <Button className="n-button" onClick={() => handleFrequencyChange("-")} style={{ display: "block", margin: "auto", textAlign: "center", verticalAlign: "middle" }}>-</Button>
            </> 
        );
  

  const handleFrequencyChange = (counterType) => {
    props.handleFrequencyChange(props.name, counterType);
    if(counterType === "+") setFrequency(frequency + 1);
    else setFrequency(frequency - 1);
  }

  return (
    <>
      <div className={`data-collection ${props.className}`}>
        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:mt-[0] mt-[5px] md:w-[100%] w-[auto]">
          <Text
            className="text-container-session"
            as="h6"
            variant="h6"
          >
            {props.name}
          </Text>
          <Text
            className="text-container-session"
            as="h6"
            variant="h6"
          >
            Frquency: {frequency}
          </Text>
          
        </div>
        {counterButtons}
      </div>
    </>
  );
};

DataCollectionBehaviour.defaultProps = {};
export default DataCollectionBehaviour;

