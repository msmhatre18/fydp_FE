import React from "react";
import './../../styles/input.css';
import { Img, Text, Input } from "components";
import RadioButtonNew from "components/RadioButtonNew";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import LogoutButton from "components/Logout";


const ProgramDetailsEntryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [programTemplate, setProgramTemplate] = useState(() => location.state.programTemplate);
  const [programName, setProgramName] = useState("");

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[9px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1098px] mb-[50px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex md:flex-1 flex-col gap-[39px] justify-start md:mt-[0] mt-[8px] md:w-[120%] w-[120%]">
            <div className="data-collection" style={{ display: 'flex', gap: '25px' }}>
              <Img
                src="images/img_arrowup.svg"
                className="h-[33px] md:mt-[0] mt-[3px] w-[auto]"
                alt="arrowup"
                onClick={() => navigate(-1)}
              />
              <Text
                className="md:ml-[0] ml-[200px] "
                as="h2"
                variant="h2"
                style={{ display: 'flex', gap: '0px', justifyContent: 'center', textAlign: 'center' }}
              >
                Program Templates
              </Text>
              <div className="flex justify-end">
                <LogoutButton />
              </div>
            </div>

            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[64px] md:w-[120%] w-[200%]">
              <Input
                wrapClassName="input-box"
                className="input"
                name="fieldCounter"
                placeholder="Program Name"
                value={programName}
                onChange={(e) => setProgramName(e.target.value)}
              ></Input>

              <RadioButtonNew
                programName={programName}
                programTemplate={programTemplate}
                kidsAbilityId={location.state.kidsAbilityId}
                className="flex flex-row items-start justify-start mt-[71px] md:w-[100%] w-[91%]"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramDetailsEntryPage;
