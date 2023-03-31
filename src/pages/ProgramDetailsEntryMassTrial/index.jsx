import React from "react";
import './../../styles/input.css';
import './../../styles/DataCollection.css';
import { Img, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const ProgramDetailsEntryMassTrialPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[9px] w-[100%]">
        <div className="flex flex-col md:gap-[40px] gap-[87px] justify-start max-w-[1098px] mb-[21px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
            <div className="flex md:flex-1 flex-col justify-start md:mt-[0] mt-[8px] md:w-[100%] w-[88%]">
              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-end justify-between md:w-[100%] w-[75%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="common-pointer h-[33px] mb-[2px] sm:mt-[0] mt-[8px] w-[auto]"
                  onClick={() => navigate("/programdetailsentry")}
                  alt="arrowup"
                />
                <Text
                  className="text-collection text-center"
                  as="h4"
                  variant="h4"
                >
                  Program Name (Mass Trial)
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[89px] mt-[21px] md:w-[100%] w-[91%]">
                <div className="data-collection" style={{ display: 'flex', gap: '20px' }}>
                  <Input
                    wrapClassName="input-box"
                    className="input"
                    name="groupFortyOne"
                    placeholder="Child"
                  ></Input>
                  <Input
                    wrapClassName="input-box"
                    className="input"
                    name="groupFortyTwo"
                    placeholder="Code"
                  ></Input>
                  <Input
                    wrapClassName="input-box"
                    className="input"
                    type="text"
                    name="groupFortyThree"
                    placeholder="Task Name"
                  ></Input>
                </div>
                <div className="data-collection" style={{ display: 'flex', gap: '20px' }} >
                  <Input
                    wrapClassName="input-box"
                    className="input"
                    name="objective"
                    placeholder="Objective"
                    style={{ marginRight: '50px', padding: '20px' }}
                  ></Input>
                  <Input
                    wrapClassName="input-box"
                    className="input"
                    name="example"
                    placeholder="Example"
                    style={{ marginRight: '50px', padding: '20px' }}
                  ></Input>
                </div>
                <div className="data-collection" style={{ display: 'flex', gap: '20px' }}>
                  <Input
                    wrapClassName="input-big"
                    className="text-area"
                    name="sd"
                    placeholder="SD"
                    type="textarea"
                  ></Input>
                  <Input
                    wrapClassName="input-big"
                    className="text-area"
                    name="criteria"
                    placeholder="Criteria"
                    type="textarea"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[10px] justify-start md:w-[100%] w-[5%]">
              <Text
                className="common-pointer bg-white_A700 flex h-[40px] items-center justify-center md:ml-[0] ml-[12px] not-italic outline outline-[1px] outline-black_900 rounded-[50%] text-black_900 text-center w-[40px]"
                variant="body2"
                onClick={() => navigate("/")}
              >
                Logout
              </Text>
            </div>
          </div>
          <Button
            className="replace-button" style={{ backgroundColor: 'lightgreen' }}
            onClick={() => navigate("/programdetailsentrycoldprobetargets")}
          >
            Finish
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProgramDetailsEntryMassTrialPage;
