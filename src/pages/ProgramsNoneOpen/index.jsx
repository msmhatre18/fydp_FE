import React from "react";
import './../../styles/ProgramRow.css';
import { Img, Text, List, Button } from "components";
import ChildProgram from "components/ChildProgram";
import { useNavigate } from "react-router-dom";

const ProgramsNoneOpenPage = () => {
  const navigate = useNavigate();

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
              Programs for Child 1
            </Text>
            <Text
              className="common-pointer bg-white_A700 flex h-[40px] items-center justify-center mb-[4px] not-italic outline outline-[1px] outline-black_900 rounded-[50%] text-black_900 text-center w-[40px]"
              variant="body2"
              onClick={() => navigate("/")}
            >
              Logout
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[17px] items-start justify-between w-[100%]">
            <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[auto]">
              <List
                className="flex-col gap-[1px] grid items-center w-[100%]"
                orientation="vertical"
              >
                {new Array(5).fill({}).map((props, index) => (
                  <React.Fragment key={`ChildProgram${index}`}>
                    <ChildProgram
                      className=  "bg-cover bg-no-repeat flex flex-1 flex-col h-[64px] items-center justify-end my-[0] p-[10px] w-[100%]"
                      name={`Child ${ index + 1}`}
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
              <Button className="create-button">
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramsNoneOpenPage;
