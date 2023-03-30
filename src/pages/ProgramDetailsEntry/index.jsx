import React from "react";
import './../../styles/input.css';
import { Img, Text, Input } from "components";
import RadioButtonNew from "components/RadioButtonNew";
import { useNavigate } from "react-router-dom";

const ProgramDetailsEntryPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[9px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1098px] mb-[50px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex md:flex-1 flex-col gap-[39px] justify-start md:mt-[0] mt-[8px] md:w-[100%] w-[89%]">
            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-end justify-between md:w-[100%] w-[74%]">
              <Img
                src="images/img_arrowup.svg"
                className="common-pointer h-[33px] mb-[2px] sm:mt-[0] mt-[8px] w-[auto]"
                onClick={() => navigate("/homepagepatients")}
                alt="arrowup"
              />
              <Text
                className="not-italic text-black_900 text-center w-[auto]"
                as="h2"
                variant="h2"
              >
                Program Name/ID 2
              </Text>
            </div>


            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[64px] md:w-[100%] w-[94%]">
              <Input
                wrapClassName="input-box"
                className="input"
                name="fieldCounter"
                placeholder="Field 1"
              ></Input>
              <div className="flex md:flex-col flex-row gap-[35px] items-center justify-start mt-[43px] md:w-[100%] w-[71%]">
                <Input
                  wrapClassName="input-box"
                  className="input"
                  name="fieldCounter_One"
                  placeholder="Field 2"
                ></Input>
                <Input
                  wrapClassName="input-box"
                  className="input"
                  name="fieldCounter_Two"
                  placeholder="Field 3"
                ></Input>
              </div>



              <div className="bg-white_A700 flex h-[150px] items-center justify-start min-h-[] mt-[43px] outline outline-[2px] outline-black_900 p-[46px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[920px]">
                <Input
                  wrapClassName="h-[150px] max-h-[250px] min-h-[100px] min-w-[920px] relative right-[45px]"
                  className="input"
                  name="fieldCounter_Three"
                  placeholder="Field 4"
                ></Input>
              </div>

              <div className="bg-white_A700 flex h-[150px] items-center justify-start min-h-[] mt-[43px] outline outline-[2px] outline-black_900 p-[46px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[920px]">
                <Input
                  wrapClassName="h-[150px] max-h-[250px] min-h-[100px] min-w-[920px] relative right-[45px]"
                  className="input"
                  name="field_Four"
                  placeholder="Field 5"
                ></Input>
              </div>

              
              <RadioButtonNew className="flex flex-row items-start justify-start mt-[71px] md:w-[100%] w-[91%]" />
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
      </div>
    </>
  );
};

export default ProgramDetailsEntryPage;
