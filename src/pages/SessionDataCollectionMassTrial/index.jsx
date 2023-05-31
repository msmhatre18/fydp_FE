import React from "react";
import { useState, useEffect } from "react";
import { Text, Img, Button } from "components";
import DataCollectionMassTrial from "components/DataCollectionMassTrial";
import { useNavigate, useLocation } from "react-router-dom";
import './../../styles/input.css';
import './../../styles/button.css';
import LogoutButton from "components/Logout";
import { axiosClient } from "constants/constants";

const SessionDataCollectionMassTrialPage = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState(null);
  const [masteredTargets, setMasteredTargets] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const sessionToken = sessionStorage.getItem("sessionToken");
    const programId = location.state.programId;
    const url = encodeURI(`/program/${programId}/session/active`)
    axiosClient.get(url, {
      headers: {
        'sessionToken': sessionToken
      }
    })
    .then(res => {
      console.log("Data....");
      console.log(res.data);
      console.log(res.data.clientProgramSessionMassTrialRecords);
      setRecords(res.data.clientProgramSessionMassTrialRecords);
      setMasteredTargets(res.data.massTrialMasteredTargets);
    })
  }, [location.state.programId]);

  const handleRatingChange = (rating, target) => {
    const recordsCopy = [...records];
    recordsCopy.forEach(record => {
      if(record.target === target) {
        record.rating = rating;
      }
    });
    setRecords(recordsCopy);
  }

  const handleOmit = (target) => {
    const recordsCopy = [...records];
    for(let i = 0; i < recordsCopy.length; i++) {
      let record = recordsCopy[i];
      if(record.target === target) {
        record.isOmitted = true;
        break;
      }
    }
    setRecords(recordsCopy);
  }

  const handleCounterChange = (target, counterType, randomReviewWord) => {
    const recordsCopy = [...records];
    for(let i = 0; i < recordsCopy.length; i++) {
      let record = recordsCopy[i];
      if(record.target === target) {
        record.ynseries = record.ynseries.concat(counterType);
        record.isRecorded = true;
        console.log(record.ynseries);
        if(record.isRandomReview) {
          record.randomReviewTargetSeries = record.randomReviewTargetSeries.concat(randomReviewWord + "#");
        }
        break
      }
    }
    setRecords(recordsCopy);
  }

  const saveSession = () => {
    const sessionToken = sessionStorage.getItem("sessionToken");
    const programId = location.state.programId;
    const url = encodeURI(`/program/${programId}/session/active/save`)
    let body = {
      'clientProgramSessionMassTrialRecords': records
    };
    axiosClient.post(url, body, {
      headers: {
        'sessionToken': sessionToken
      }
    }).then(_ => _);
  };

  const persistSession = () => {
    const sessionToken = sessionStorage.getItem("sessionToken");
    const programId = location.state.programId;
    const url = encodeURI(`/program/${programId}/session/active/persist`)
    console.log("persisting...");
    console.log(records);
    let body = {
      'clientProgramSessionMassTrialRecords': records
    };
    console.log("body that failed !!!!!");
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

  const handlePersist = () => {
    persistSession();
    alert("Session has been saved");
    navigate("/accountdashboard");
  }

  const handleAddNewTarget = () => {
    let replacementTarget = prompt(`Please enter the new target: `);
    let recordsCopy = [...records];
    let replacement = {
      'target': replacementTarget,
      'isMet': false,
      'isOmitted': false,
      'isRecorded': false,
      'canOmit': false,
      'isRandomReview': false,
      'randomReviewTargetSeries': "",
      'rating': "",
      'prevRating': "None",
      'ynseries': "" 
    };
    recordsCopy.push(replacement);
    setRecords(recordsCopy);
  }


  let recordRows;
  if(records) {
    recordRows = records
      .filter(record => !record.isOmitted)
      .map(record => <DataCollectionMassTrial 
        key={record.id} handleOmit={handleOmit} canOmit={record.canOmit} target={record.target} 
        isRecorded={record.isRecorded} prevRating={record.prevRating} handleRatingChange={handleRatingChange}
        isRandomReview={record.isRandomReview} masteredTargets={masteredTargets} ynseries = {record.ynseries}
        handleCounterChange={handleCounterChange}
         />);
  }
  else {
    recordRows = <></>;
  }

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[9px] w-[100%]">
        <div className="flex flex-col items-center justify-start max-w-[1111px] mb-[48px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="data-collection" style={{ display: 'flex', gap: '25px' }}>
            <Img
              src="images/img_arrowup.svg"
              className="common-pointer h-[33px] md:mt-[0] mt-[3px] w-[auto]"
              onClick={() => handleNavToLast}
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
             {recordRows}
             <div className="button-container">
                <Button onClick={handleAddNewTarget} className="bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[195px] ml-[20px] mt-[68px] not-italic py-[3px] rounded-[16px] text-[20px] text-center text-white_A700 w-[auto]">
                  Add New Target
                </Button>
                <Button onClick={handlePersist} className="bg-red_A700 cursor-pointer font-normal leading-[normal] min-w-[195px] ml-[20px] mt-[68px] not-italic py-[3px] rounded-[16px] text-[20px] text-center text-white_A700 w-[auto]">
                   Finish and Save
                </Button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionDataCollectionMassTrialPage;
