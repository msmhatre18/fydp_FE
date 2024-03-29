import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../../styles/DataCollection.css';
import { Text, Button } from "components";

function RadioButtons(props) {
  const navigate = useNavigate();

  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const state = {
      programTemplate: props.programTemplate,
      programName: props.programName,
      kidsAbilityId: props.kidsAbilityId
    };
    if (selectedValue === 'Cold Probe Collection') {
      navigate('/ProgramDetailsEntryColdProbe', { state: state });
    } else if (selectedValue === 'Mass Trial Collection') {
      navigate('/ProgramDetailsEntryMassTrial', { state: state });
    }
  }

  return (
    <>
      <div className={`data-collection ${props.className}`} style={{ width: '550px' }}>
        <div className="radio-container">
          <Text style={{ color: "black", whiteSpace: "nowrap" }} className="text-container" as="h4" variant="h4">
            Data Type:
          </Text>
          <form onSubmit={handleFormSubmit}>
            <label className="radio-buttons">
              <input
                type="radio"
                value="Cold Probe Collection"
                checked={selectedValue === 'Cold Probe Collection'}
                onChange={handleRadioChange}
              />
              Cold Probe Collection
            </label>
            <label className="radio-buttons">
              <input
                type="radio"
                value="Mass Trial Collection"
                checked={selectedValue === 'Mass Trial Collection'}
                onChange={handleRadioChange}
              />
              Mass Trial Collection
            </label>
            <Button className="replace-button" type="submit" style={{ backgroundColor: 'lightgreen' }}>
              Continue
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RadioButtons;
