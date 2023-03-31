import React from "react";

import ClientRow from "components/ClientRow";
import { Text, Button, Img } from "components";
import { useNavigate } from "react-router-dom";

const HomepagepatientsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter gap-[12px] items-center justify-end mx-[auto] pt-[11px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start max-w-[1105px] mx-[auto] md:px-[20px] w-[100%]">
          <Img
            src="images/img_arrowup.svg"
            className="h-[33px] md:mt-[0] mt-[3px] w-[auto]"
            alt="arrowup"
            onClick={() => navigate(-1)}
          />
          <Text
            className="md:ml-[0] ml-[415px] md:mt-[0] mt-[8px] not-italic text-black_900 text-center w-[auto]"
            as="h2"
            variant="h2"
          >
            Clients
          </Text>
          <Text
            className="bg-white_A700 flex h-[40px] items-center justify-center mb-[12px] md:ml-[0] ml-[446px] not-italic outline outline-[1px] outline-black_900 rounded-[50%] text-black_900 text-center w-[40px]"
            variant="body2"
            onClick={() => navigate("/")}
          >
            Logout
          </Text>
        </div>
        
        <div className="flex flex-col items-center justify-center mt-10 w-full md:flex-row md:gap-4 md:justify-between md:mt-20">        
          <ClientRow kidsabilityId="Child 1" className="flex flex-row items-end justify-start md:ml-[0] ml-[7px] mt-[40px] md:w-[100%] w-[78%]" />
          <ClientRow kidsabilityId="Child 2" className="flex flex-row items-end justify-start md:ml-[0] ml-[7px] mt-[40px] md:w-[100%] w-[78%]" />
        </div>

        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center mt-[15px] md:w-[100%] w-[96%]">
            <Button className="bg-transparent cursor-pointer font-normal leading-[normal] min-w-[44px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-center w-[auto]">
              Edit
            </Button>
            <Button className="bg-transparent cursor-pointer font-normal leading-[normal] min-w-[47px] md:ml-[0] ml-[36px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-center w-[auto]">
              Add
            </Button>
        </div>
      </div>
    </>
  );
};

export default HomepagepatientsPage;
