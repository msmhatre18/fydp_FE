import React from "react";

import { Img, Text, SelectBox, List, Line } from "components";
import { useNavigate } from "react-router-dom";

const AddClienttoPractitionerPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[6px] w-[100%]">
        <div className="flex flex-col gap-[25px] items-center justify-start max-w-[1102px] mb-[206px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex sm:flex-col flex-row sm:gap-[40px] items-end justify-between w-[100%]">
            <Img
              src="images/img_arrowup.svg"
              className="common-pointer h-[33px] mb-[33px] sm:mt-[0] mt-[7px] w-[auto]"
              onClick={() => navigate(-1)}
              alt="arrowup"
            />
            <Text
              className="sm:mt-[0] mt-[29px] not-italic text-black_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Add Client to Practitioner
            </Text>
            <Text
              className="common-pointer bg-white_A700 flex h-[40px] items-center justify-center mb-[33px] not-italic outline outline-[1px] outline-black_900 rounded-[50%] text-black_900 text-center w-[40px]"
              variant="body2"
              onClick={() => navigate("/")}
            >
              Logout
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[15px] items-start justify-start md:w-[100%] w-[85%]">
            <div className="flex flex-col items-center justify-start md:w-[100%] w-[98%]">
              <SelectBox
                className="bg-cover bg-no-repeat h-[56px] p-[10px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group58.svg')" }}
                placeholderClassName=""
                name="column"
                placeholder=""
                isSearchable={true}
                isMulti={false}
              ></SelectBox>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClienttoPractitionerPage;
