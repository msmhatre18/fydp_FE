import React from "react";
import { useState } from "react";
import './../../styles/input.css';
import './../../styles/DataCollection.css';
import { Img, Text, Input, Button } from "components";
import { useNavigate, useLocation } from "react-router-dom";
import LogoutButton from "components/Logout";

const ProgramDetailsEntryColdProbePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [coldProbeData, setColdProbeData] = useState(() => {
    return {
      child: "",
      code: "",
      taskName: "",
      objective: "",
      example: "",
      sd: "",
      criteria: "",
      criterionToMastery: ""
    }
  });

  const handleSubmit = () => {
    const prevState = location.state;
    const nextState = {
      name: prevState.programName,
      kidsAbilityId: prevState.kidsAbilityId,
      programTemplate: {
        name: prevState.programTemplate.name
      },
      coldProbeSheet: { ...coldProbeData }
    };
    navigate("/programdetailsentrycoldprobetargets", { state: nextState });
  }



  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[9px] w-[100%]">
        <div className="flex flex-col md:gap-[40px] gap-[87px] justify-start max-w-[1098px] mb-[21px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="">
            <div className="">
              <div className="data-collection" style={{ maxWidth: '1500px', display: 'flex', alignItems: 'center', justifyContent: 'normal', width: '100%' }}>
                <Img
                  src="images/img_arrowup.svg"
                  className="common-pointer h-[33px] md:mt-[0] mt-[3px] w-[auto]"
                  onClick={() => navigate(-1)}
                  alt="arrowup"
                />
                <Text
                  className="flex-grow text-center"
                  as="h2"
                  variant="h2"
                  style={{ margin: 0, marginLeft: '7em' }}
                >
                  Program Name (Cold Probe)
                </Text>
                <div style={{ flexShrink: 1 }}>
                  <LogoutButton />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[89px] mt-[21px] md:w-[100%] w-[91%]">
                <div className="data-collection" style={{ display: 'flex', gap: '20px' }}>
                  <Input
                    wrapClassName="input-box"
                    className="input"
                    name="groupFortyOne"
                    placeholder="Child"
                    value={coldProbeData.child}
                    onChange={(e) => setColdProbeData({ ...coldProbeData, child: e.target.value })}
                  ></Input>
                  <Input
                    wrapClassName="input-box"
                    className="input"
                    name="groupFortyTwo"
                    placeholder="Code"
                    value={coldProbeData.code}
                    onChange={(e) => setColdProbeData({ ...coldProbeData, code: e.target.value })}
                  ></Input>
                  <Input
                    wrapClassName="input-box"
                    className="input"
                    type="text"
                    name="groupFortyThree"
                    placeholder="Task Name"
                    value={coldProbeData.taskName}
                    onChange={(e) => setColdProbeData({ ...coldProbeData, taskName: e.target.value })}
                  ></Input>
                </div>
                <div className="data-collection" style={{ display: 'flex', gap: '20px' }} >
                  <Input
                    wrapClassName="input-box"
                    className="input"
                    name="objective"
                    placeholder="Objective"
                    style={{ marginRight: '50px', padding: '20px' }}
                    value={coldProbeData.objective}
                    onChange={(e) => setColdProbeData({ ...coldProbeData, objective: e.target.value })}
                  ></Input>
                  <Input
                    wrapClassName="input-box"
                    className="input"
                    name="example"
                    placeholder="Example"
                    style={{ marginRight: '50px', padding: '20px' }}
                    value={coldProbeData.example}
                    onChange={(e) => setColdProbeData({ ...coldProbeData, example: e.target.value })}
                  ></Input>
                </div>
                <div className="data-collection" style={{ display: 'flex', gap: '20px' }}>
                  <Input
                    wrapClassName="input-big"
                    className="text-area"
                    name="sd"
                    placeholder="SD"
                    type="textarea"
                    value={coldProbeData.sd}
                    onChange={(e) => setColdProbeData({ ...coldProbeData, sd: e.target.value })}
                  ></Input>
                  <Input
                    wrapClassName="input-big"
                    className="text-area"
                    name="criteria"
                    placeholder="Criteria"
                    type="textarea"
                    value={coldProbeData.criteria}
                    onChange={(e) => setColdProbeData({ ...coldProbeData, criteria: e.target.value })}
                  ></Input>
                  <Input
                    wrapClassName="input-big"
                    className="text-area"
                    name="criterion to mastery"
                    placeholder="Criterion To Mastery"
                    type="textarea"
                    value={coldProbeData.criterionToMastery}
                    onChange={(e) => setColdProbeData({ ...coldProbeData, criterionToMastery: e.target.value })}
                  ></Input>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="replace-button" style={{ backgroundColor: 'lightgreen' }}
            onClick={handleSubmit}
          >
            Add Targets
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProgramDetailsEntryColdProbePage;
