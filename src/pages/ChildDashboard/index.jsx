import React from "react";
import LogoutButton from "components/Logout";
import { Img, Text, Button } from "components";
import BehaviorDashData from "components/BehaviorDashData";
import ProgramsDashData from "components/ProgramsDashData";
import { useNavigate } from "react-router-dom";

const ChildDashboardPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[15px] w-[100%]">
        <div className="flex flex-col gap-[56px] items-center justify-start max-w-[1103px] mb-[103px] mt-[2px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[56px] items-center justify-start w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
              <Img
                src="images/img_arrowup.svg"
                className="common-pointer h-[33px] md:mt-[0] mt-[3px] w-[auto]"
                onClick={() => navigate(-1)}
                alt="arrowup"
              />
              <Text
                className="md:ml-[0] ml-[370px] not-italic text-black_900 text-center w-[auto]"
                as="h2"
                variant="h2"
              >
                Child 1’s Dashboard
              </Text>
              <div className="flex justify-end">
                <LogoutButton />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between md:w-[100%] w-[72%]">
              <BehaviorDashData target="Child 1" className="bg-bluegray_100 flex flex-col items-center justify-end p-[28px] sm:px-[20px] md:w-[100%] w-[auto]" />
              <ProgramsDashData target="Child 1" className="bg-bluegray_100 flex flex-col items-center justify-end p-[28px] sm:px-[20px] md:w-[100%] w-[auto]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChildDashboardPage;
