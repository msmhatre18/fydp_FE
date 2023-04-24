import React from "react";
import './../../styles/input.css';
import './../../styles/DataCollection.css';
import { Img, Text, List, Input, Button } from "components";
import { useNavigate } from "react-router-dom";
import LogoutButton from "components/Logout";

const ProgramDetailsEntryMassTrialTargetsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[9px] w-[100%]">
        <div className="flex flex-col justify-start max-w-[1098px] mb-[21px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex sm:flex-col flex-row md:gap-[40px] items-end justify-between w-[100%]">
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
              Program Name (Mass Trial)
            </Text>
            <div className="flex justify-end">
              <LogoutButton />
            </div>
          </div>
          <Text
            className="text-collection text-center"
            as="h4"
            variant="h4"
          >
            Targets
          </Text>
          <div className="data-collection">
            <div className="flex items-center justify-start mb-[8px] md:w-[100%] w-[auto]">
              <List className="flex-col gap-[40px] grid items-center w-[100%]" orientation="vertical">
                {[...Array(6)].map((row, i) => (
                  <div key={i} className="flex-1 gap-[42px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between my-[0] w-[100%]">
                    {[...Array(5)].map((col, j) => (
                      <Input
                        key={j}
                        wrapClassName="input-box"
                        className="input"
                        name={`group${i}${j}`}
                        placeholder={`${i + 1},${j + 1}`}
                      />
                    ))}
                  </div>
                ))}
              </List>
            </div>
          </div>
          <Button className="replace-button" style={{ backgroundColor: 'lightgreen' }}>
            Finish
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProgramDetailsEntryMassTrialTargetsPage;
