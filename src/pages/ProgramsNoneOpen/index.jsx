import React from "react";
import './../../styles/ProgramRow.css';
import { Img, Text, List, Button } from "components";
import ChildProgram from "components/ChildProgram";
import { axiosClient } from "constants/constants";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import LogoutButton from "components/Logout";

const ProgramsNoneOpenPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const kidsAbilityId = location.state.kidsAbilityId;
  const [programs, setPrograms] = useState(null);

  useEffect(() => {
    const sessionToken = sessionStorage.getItem("sessionToken");
    const uri = encodeURI(`/practitioner/client/${kidsAbilityId}/program`);
    axiosClient.get(uri, {
      headers: {
        'sessionToken': sessionToken,
      }
    })
      .then(res => {
        console.log(res);
        setPrograms(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  let programRows;
  if (programs) {
    programRows = (
      [...programs]
        .sort((a, b) => {
          if ((a.isMastered && b.isMastered) || (!a.isMastered && !b.isMastered)) return a.name.localeCompare(b.name);
          else if (!a.isMastered) return a;
          else return b;
        })
        .map(program => (
          <ChildProgram
            className="bg-cover bg-no-repeat flex flex-1 flex-col h-[64px] items-center justify-end my-[0] p-[10px] w-[100%]"
            name={program.name}
            id={program.id}
            kidsAbilityId={kidsAbilityId}
            key={program.id}
            isMastered={program.isMastered}
            embeddableProgramTemplateLink={program.embeddableProgramTemplateLink}
          />
        ))
    );
  }
  else programRows = <></>;


  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[13px] w-[100%]">
        <div className="flex flex-col gap-[12px] items-center justify-start max-w-[1105px] mb-[8px] mt-[4px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between w-[100%]">
            <Img
              src="images/img_arrowup.svg"
              className="common-pointer h-[33px] w-[auto]"
              onClick={() => navigate("/homepagepatients")}
              alt="arrowup"
            />
            <Text
              className="not-italic text-black_900 text-center w-[auto]"
              as="h2"
              variant="h2"
            >
              Programs for {kidsAbilityId}
            </Text>
            <div className="flex justify-end">
              <LogoutButton />
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[17px] items-start justify-between w-[100%]">
            <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[auto]">
              <List
                className="flex-col gap-[1px] grid items-center w-[100%]"
                orientation="vertical"
              >
                {programRows}
              </List>
              <Button className="create-button" onClick={() => navigate("/programsdropdownopen", { state: { kidsAbilityId: kidsAbilityId } })}>
                Create New Program
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramsNoneOpenPage;
