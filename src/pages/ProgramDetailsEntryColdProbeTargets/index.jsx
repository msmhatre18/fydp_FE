import React from "react";
import './../../styles/input.css';
import './../../styles/DataCollection.css';
import { Img, Text, List, Input, Button } from "components";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { axiosClient } from "constants/constants";
import LogoutButton from "components/Logout";

const ProgramDetailsEntryColdProbeTargetsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [targets, setTargets] = useState(() => {
    let arr = [];
    let matrix = [];
    for (let i = 0; i < 5; i++) {
      let curr = [];
      for (let j = 0; j < 5; j++) {
        curr.push("");
      }
      matrix.push(curr);
    }
    arr.push(matrix);
    return arr;
  });

  const [idx, setIdx] = useState(0);


  let matrix = targets[idx].map((_, i) => (
    <div key={i} className="flex-1 gap-[42px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between my-[0] w-[100%]">
      {targets[idx][i].map((_, j) => (
        <Input
          key={idx * 25 + i * 5 + j + 1}
          wrapClassName="input-box"
          className="input"
          name={`group ${idx * 25 + i * 5 + j + 1}`}
          placeholder={`target ${idx * 25 + i * 5 + j + 1}`}
          value={targets[idx][i][j]}
          onChange={(e) => {
            let copy = [...targets];
            copy[idx][i][j] = e.target.value;
            setTargets(copy);
          }}
        />
      ))}
    </div>
  ));

  const isFull = () => {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (targets[idx][i][j].length == 0) return false;
      }
    }
    return true;
  }

  const handleAddMoreTargets = () => {
    let copy = [...targets];
    let matrix = [];
    for (let i = 0; i < 5; i++) {
      let curr = [];
      for (let j = 0; j < 5; j++) {
        curr.push("");
      }
      matrix.push(curr);
    }
    copy.push(matrix);
    setTargets(copy);
    setIdx(idx + 1);
  }

  const handleSubmit = () => {
    let prevState = location.state;
    let kidsAbilityId = prevState.kidsAbilityId;
    let body = {
      ...prevState
    };
    delete body.kidsAbilityId;
    let coldProbeSheetItems = [];
    for (let i = 0; i <= idx; i++) {
      for (let j = 0; j < 5; j++) {
        for (let k = 0; k < 5; k++) {
          if (targets[i][j][k].length != 0) {
            coldProbeSheetItems.push({ targetName: targets[i][j][k] });
          }
        }
      }
    }

    body.coldProbeSheet.coldProbeSheetItems = coldProbeSheetItems;

    const url = encodeURI(`/practitioner/client/${kidsAbilityId}/program`)
    const sessionToken = sessionStorage.getItem("sessionToken");

    axiosClient.post(url, body, {
      headers: {
        sessionToken: sessionToken
      }
    })
      .then((_) => {
        alert(`Program: ${body.name} has been successfully created.`);
        navigate("/programsnoneopen", {
          state: {
            kidsAbilityId: kidsAbilityId
          }
        });
      })
      .catch(_ => {
        alert("unable to create the program at this time");
        navigate("/programsnoneopen", {
          state: {
            kidsAbilityId: kidsAbilityId
          }
        });
      })
  }


  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[9px] w-[100%]">
        <div className="flex flex-col justify-start max-w-[1098px] mb-[21px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="data-collection">
            <Img
              src="images/img_arrowup.svg"
              className="common-pointer h-[33px] mb-[2px] sm:mt-[0] mt-[17px] w-[auto]"
              onClick={() => navigate(-1)}
              alt="arrowup"
            />
            <Text
              className="text-collection text-center"
              as="h4"
              variant="h4"
            >
              {`${location.state.name} (Cold Probe)`}
            </Text>
            <div className="flex justify-end">
              <LogoutButton />
            </div>
          </div>
          <div className="data-collection">
            <div className="flex items-center justify-start mb-[8px] md:w-[100%] w-[auto]">
              <List className="flex-col gap-[40px] grid items-center w-[100%]" orientation="vertical">
                {matrix}
              </List>
            </div>
            {isFull() &&
              <Button style={{ fontWeight: 'bold' }} onClick={handleAddMoreTargets}>
                Add More Targets
              </Button>
            }

          </div>

          <Button className="replace-button" style={{ backgroundColor: 'lightgreen' }} onClick={handleSubmit}>
            Finish
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProgramDetailsEntryColdProbeTargetsPage;
