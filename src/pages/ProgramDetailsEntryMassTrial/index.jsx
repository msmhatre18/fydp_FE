import React from "react";
import { useState } from "react";
import './../../styles/input.css';
import './../../styles/DataCollection.css';
import { Img, Text, Input, Button } from "components";
import { useNavigate, useLocation } from "react-router-dom";
import LogoutButton from "components/Logout";

const ProgramDetailsEntryMassTrialPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [massTrialData, setMassTrialData] = useState(() => {
    return {
      child: "",
      taskName: "",
      sd: "",
      targetMastery: "",
      revisionCriteria: "",
      promptLegend: "",
      instructions: ""
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
      massTrialSheet: { ...massTrialData }
    };
    navigate("/programdetailsentrymasstrialtargets", { state: nextState });
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
                  {`${location.state.programName} (Mass Trial)`}
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
                    value={massTrialData.child}
                    onChange={(e) => setMassTrialData({ ...massTrialData, child: e.target.value })}
                  ></Input>
                  <Input
                    wrapClassName="input-box"
                    className="input"
                    name="groupFortyTwo"
                    placeholder="Task Name"
                    value={massTrialData.taskName}
                    onChange={(e) => setMassTrialData({ ...massTrialData, taskName: e.target.value })}
                  ></Input>
                  <Input
                    wrapClassName="input-box"
                    className="input"
                    type="text"
                    name="groupFortyThree"
                    placeholder="SD"
                    value={massTrialData.sd}
                    onChange={(e) => setMassTrialData({ ...massTrialData, sd: e.target.value })}
                  ></Input>
                </div>
                <div className="data-collection" style={{ display: 'flex', gap: '20px' }} >
                  <Input
                    wrapClassName="input-box"
                    className="input"
                    name="Target Mastery"
                    placeholder="Target Mastery"
                    style={{ marginRight: '50px', padding: '20px' }}
                    value={massTrialData.targetMastery}
                    onChange={(e) => setMassTrialData({ ...massTrialData, targetMastery: e.target.value })}
                  ></Input>
                  <Input
                    wrapClassName="input-box"
                    className="input"
                    name="Revision Criteria"
                    placeholder="Revision Criteria"
                    style={{ marginRight: '50px', padding: '20px' }}
                    value={massTrialData.revisionCriteria}
                    onChange={(e) => setMassTrialData({ ...massTrialData, revisionCriteria: e.target.value })}
                  ></Input>
                </div>
                <div className="data-collection" style={{ display: 'flex', gap: '20px' }}>
                  <Input
                    wrapClassName="input-big"
                    className="text-area"
                    name="Prompt Legend"
                    placeholder="Prompt Legend"
                    type="textarea"
                    value={massTrialData.promptLegend}
                    onChange={(e) => setMassTrialData({ ...massTrialData, promptLegend: e.target.value })}
                  ></Input>
                  <Input
                    wrapClassName="input-big"
                    className="text-area"
                    name="Instructions"
                    placeholder="Instructions"
                    type="textarea"
                    value={massTrialData.instructions}
                    onChange={(e) => setMassTrialData({ ...massTrialData, instructions: e.target.value })}
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

export default ProgramDetailsEntryMassTrialPage;
