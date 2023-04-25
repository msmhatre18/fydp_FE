import React from "react";
import { useState, useEffect } from "react";
import { Img, Text, Button } from "components";
import ProgamRow from "components/ProgamRow";
import { useNavigate, useLocation } from "react-router-dom";
import { axiosClient } from "constants/constants";
import LogoutButton from "components/Logout";

const ProgramsDropdownOpenPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [programTemplates, setProgramTemplates] = useState(null);

  useEffect(() => {
    const url = encodeURI("/program/template");
    const sessionToken = sessionStorage.getItem("sessionToken");
    axiosClient.get(url, {
      headers: {
        sessionToken: sessionToken
      }
    })
      .then((res) => {
        console.log(res.data);
        setProgramTemplates(res.data);
      })
  }
    , []);
  console.log("templates");
  console.log(programTemplates);
  if (programTemplates) console.log(programTemplates[0].name);

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter gap-[12px] items-center justify-end mx-[auto] pt-[11px] w-[100%]">
        <div className="data-collection" style={{ display: 'flex', gap: '25px' }}>
          <Img
            src="images/img_arrowup.svg"
            className="h-[33px] md:mt-[0] mt-[3px] w-[auto]"
            alt="arrowup"
            onClick={() => navigate(-1)}
          />
          <Text
            className="md:ml-[0] ml-[325px] "
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


        <div className="flex flex-col items-center justify-center mt-10 w-full md:flex-row md:gap-4 md:justify-between md:mt-20">
          {programTemplates &&
            programTemplates.map(programTemplate => <ProgamRow
              kidsAbilityId={location.state.kidsAbilityId}
              programTemplate={programTemplate}
              className="flex flex-row items-end justify-start md:ml-[0] ml-[7px] mt-[40px] md:w-[100%] w-[78%]"
              onClick={() => navigate("/sessionviewprogramtemplate")}
            />)}
        </div>
      </div>
    </>
  );
};

export default ProgramsDropdownOpenPage;
