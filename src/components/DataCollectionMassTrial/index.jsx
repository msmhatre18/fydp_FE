import React, { useState, useEffect } from 'react';
import './../../styles/DataCollection.css';
import { Text, Button } from "components";

const DataCollectionMassTrial = (props) => {
  const [rating, setRating] = useState('');
  const getYCount = () => {
    let ynseries = props.ynseries;
    let yCount = 0;
    for(let i = 0; i < ynseries.length; i++) {
        let curr = ynseries.charAt(i);
        if(curr === 'Y') yCount ++;
    }
    return yCount;
  }
  
  const getNCount = () => {
    let ynseries = props.ynseries;
    let nCount = 0;
    for(let i = 0; i < ynseries.length; i++) {
        let curr = ynseries.charAt(i);
        if(curr === 'N') nCount ++;
    }
    return nCount;
  } 
  const [yCount, setYCount] = useState(() => getYCount());
  const [nCount, setNCount] = useState(() => getNCount());
  const [selectedOption, setSelectedOption] = useState("");

  let counterButtons;
  if(!props.isRandomReview || (props.isRandomReview && selectedOption !== "")) {
    counterButtons =(
            <>
            <Button className="y-button" disabled={yCount + nCount >= 10} onClick={() => handleCounterChange("Y", selectedOption)} style={{ display: "block", margin: "auto", textAlign: "center", verticalAlign: "middle" }}>Y: {yCount}</Button>
            <Button className="n-button" disabled={yCount + nCount >= 10} onClick={() => handleCounterChange("N", selectedOption)} style={{ display: "block", margin: "auto", textAlign: "center", verticalAlign: "middle" }}>N: {nCount}</Button>
            </> 
        );
  }
  else {
    counterButtons = <></>;
  }

  const handleCounterChange = (counterType, randomReviewWord) => {
    props.handleCounterChange(props.target, counterType, randomReviewWord);
    if(counterType === "Y") setYCount(yCount + 1);
    else setNCount(nCount + 1);
    if(randomReviewWord !== "") {
        setSelectedOption("");
    }
  }

  

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleDropDownChange = (event) => {
    setSelectedOption(event.target.value);
  }

  let dropDownOptions= [];
  if(props.isRandomReview) {
    dropDownOptions.push(<option value="" disabled selected>Target</option>)
    for(let i = 0; i < props.masteredTargets.length; i++) {
        dropDownOptions.push(<option value={props.masteredTargets[i]}>{props.masteredTargets[i]}</option>)
    }
  }
  else dropDownOptions = <></>;


  useEffect(() => props.handleRatingChange(rating, props.target), [rating]);
  return (
    <>
      <div className={`data-collection ${props.className}`}>
        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:mt-[0] mt-[5px] md:w-[100%] w-[auto]">
          <Text
            className="text-container-session"
            as="h6"
            variant="h6"
          >
            {props.target}
          </Text>
          <Text
            className="text-container-session"
            as="h6"
            variant="h6"
          >
            Prev Prompt Lvl: {props.prevRating}
          </Text>
          <label className="radio-container">
            <input className='input-text'
              type="text"
              value={props.rating}
              placeholder="Prompt Lvl"
              onChange={handleRatingChange}
            />
         </label>
        {props.isRandomReview && <select className='select-box' value={selectedOption} onChange={handleDropDownChange} > {dropDownOptions} </select>}
         
        </div>
        {counterButtons}
        {props.canOmit && !props.isRandomReview && <Button className="replace-button" onClick={() => props.handleOmit(props.target)} style={{ display: "block", margin: "auto", textAlign: "center", verticalAlign: "middle" }}>Omit</Button>}
      </div>
    </>
  );
};

DataCollectionMassTrial.defaultProps = {};
export default DataCollectionMassTrial;

