import React from "react";
import { useState, useEffect } from "react";
import { Text, Img, Button } from "components";
import DataCollectionBehaviour from "components/DataCollectionBehaviour";
import { useNavigate, useLocation } from "react-router-dom";
import './../../styles/input.css';
import './../../styles/button.css';
import LogoutButton from "components/Logout";
import { axiosClient } from "constants/constants";
import behaviourIcon from './../../assets/images/behaviourIcon.jpeg';

const SessionBehaviouralDataPage = () => {
  const navigate = useNavigate();
  const [behaviours, setBehaviours] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const sessionToken = sessionStorage.getItem("sessionToken");
    const kidsAbilityId = location.state.kidsAbilityId;
    const url = encodeURI(`/client/${kidsAbilityId}/behaviour/active`);
    axiosClient.get(url, {
      headers: {
        'sessionToken': sessionToken
      }
    })
    .then(res => {
      setBehaviours(res.data.behaviourSessionItems);
    })
  }, [location.state.kidsAbilityId]);

  const handleFrequencyChange = (name, counterType) => {
    const behavioursCopy = [...behaviours];
    for(let i = 0; i < behavioursCopy.length; i++) {
      let behaviour = behavioursCopy[i];
      if(behaviour.name === name) {
        if(counterType === "+") {
          behaviour.frequency = behaviour.frequency + 1;
        }
        else {
          behaviour.frequency = behaviour.frequency - 1;
        }
        break;
      }
    }
    setBehaviours(behavioursCopy);
  }

  const saveSession = () => {
    const sessionToken = sessionStorage.getItem("sessionToken");
    const kidsAbilityId = location.state.kidsAbilityId;
    const url = encodeURI(`/client/${kidsAbilityId}/behaviour/active`)
    let body = {
      'behaviourSessionItems': behaviours
    };
    console.log("saving...");
    console.log(body);
    axiosClient.post(url, body, {
      headers: {
        'sessionToken': sessionToken
      }
    }).then(_ => _);
  };

  const handleNavToHome = () => {
    saveSession();
    navigate("/accountdashboard");
  }

  const handleNavToLast = () => {
    saveSession();
    navigate(-1);
  }


  const handleAddNewBehaviour = () => {
    let newBehaviourName = prompt(`Please enter the new behaviour exhibited: `);
    let behavioursCopy = [...behaviours];
    let newBehaviour = {
      'name': newBehaviourName,
      'frequency': 0
    };
    behavioursCopy.push(newBehaviour);
    setBehaviours(behavioursCopy);
  }

  const handleViewHistory = () => {
    saveSession();
    navigate("/behaviourdata", {
      state: {
        kidsAbilityId: location.state.kidsAbilityId
      }
    });
  }


  let behaviourRows;
  if(behaviours) {
    behaviourRows = behaviours
      .map(behaviour => <DataCollectionBehaviour
        key={behaviour.id} name={behaviour.name} frequency={behaviour.frequency}
        handleFrequencyChange={handleFrequencyChange}
         />);
  }
  else {
    behaviourRows = <></>;
  }

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[9px] w-[100%]">
        <div className="flex flex-col items-center justify-start max-w-[1111px] mb-[48px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="data-collection" style={{ display: 'flex', gap: '25px' }}>
          <Img
              src="images/img_arrowup.svg"
              className="common-pointer h-[33px] md:mt-[0] mt-[3px] w-[auto]"
              onClick={() => handleNavToLast()}
              alt="arrowup"
            />
            <Text
              className="md:ml-[0] ml-[370px] not-italic text-black_900 text-center w-[auto]"
              as="h2"
              variant="h2"
            >
              Mass Trial
            </Text>
            <div className="flex justify-end">
              <LogoutButton onClick={handleNavToHome}/>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[35px] items-start justify-start md:w-[100%] w-[92%]">
            <div className="flex flex-col justify-start md:mt-[0] mt-[40px] md:w-[100%] w-[96%]">
             {behaviourRows}
             <div className="button-container">
                <Button onClick={handleAddNewBehaviour} className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[195px] ml-[20px] mt-[68px] not-italic py-[3px] rounded-[16px] text-[20px] text-center text-white_A700 w-[auto]">
                  Add New Behaviour
                </Button>
                <Button onClick={handleViewHistory} className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[195px] ml-[20px] mt-[68px] not-italic py-[3px] rounded-[16px] text-[20px] text-center text-white_A700 w-[auto]">
                  View History
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionBehaviouralDataPage;
