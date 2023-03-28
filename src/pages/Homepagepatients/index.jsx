import React from "react";

import ChildRowUniqueID from "components/ChildRowUniqueID";
import { Text, Button, Img } from "components";
import { useNavigate } from "react-router-dom";

const HomepagepatientsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-end justify-start mx-[auto] p-[6px] w-[100%]">
        <div className="flex flex-col items-center justify-start mt-[41px] md:px-[20px] md:w-[100%] w-[88%]">
          <ChildRowUniqueID className="bg-blue_600 flex flex-row items-center justify-start outline outline-[2px] outline-black_900 p-[15px] w-[100%]" />
          <div className="bg-blue_600 flex flex-row gap-[21px] items-center justify-start outline outline-[2px] outline-black_900 p-[17px] w-[100%]">
            <Text
              className="mb-[5px] not-italic text-black_900 text-center w-[auto]"
              as="h4"
              variant="h4"
            >
              Child 1
            </Text>
            <Text
              className="my-[2px] not-italic text-black_900 text-center w-[auto]"
              as="h4"
              variant="h4"
            >
              Unique ID
            </Text>
          </div>
          <div className="bg-blue_600 flex flex-row gap-[17px] items-center justify-start outline outline-[2px] outline-black_900 p-[15px] w-[100%]">
            <Text
              className="mb-[7px] mt-[2px] not-italic text-black_900 text-center w-[auto]"
              as="h4"
              variant="h4"
            >
              Child 3
            </Text>
            <Text
              className="my-[4px] not-italic text-black_900 text-center w-[auto]"
              as="h4"
              variant="h4"
            >
              Unique ID
            </Text>
          </div>
          <div className="bg-blue_600 flex flex-row gap-[16px] items-center justify-start outline outline-[2px] outline-black_900 p-[15px] w-[100%]">
            <Text
              className="mb-[7px] mt-[2px] not-italic text-black_900 text-center w-[auto]"
              as="h4"
              variant="h4"
            >
              Child 4
            </Text>
            <Text
              className="my-[4px] not-italic text-black_900 text-center w-[auto]"
              as="h4"
              variant="h4"
            >
              Unique ID
            </Text>
          </div>
          <div className="bg-blue_600 flex flex-row gap-[17px] items-center justify-start outline outline-[2px] outline-black_900 p-[15px] w-[100%]">
            <Text
              className="mb-[7px] mt-[2px] not-italic text-black_900 text-center w-[auto]"
              as="h4"
              variant="h4"
            >
              Child 5
            </Text>
            <Text
              className="my-[4px] not-italic text-black_900 text-center w-[auto]"
              as="h4"
              variant="h4"
            >
              Unique ID
            </Text>
          </div>
          <div className="bg-blue_600 flex flex-row gap-[17px] items-center justify-start outline outline-[2px] outline-black_900 p-[15px] w-[100%]">
            <Text
              className="mb-[7px] mt-[2px] not-italic text-black_900 text-center w-[auto]"
              as="h4"
              variant="h4"
            >
              Child 6
            </Text>
            <Text
              className="my-[4px] not-italic text-black_900 text-center w-[auto]"
              as="h4"
              variant="h4"
            >
              Unique ID
            </Text>
          </div>
          <div className="bg-blue_600 flex flex-row gap-[17px] items-center justify-start outline outline-[2px] outline-black_900 p-[16px] w-[100%]">
            <Text
              className="mb-[6px] not-italic text-black_900 text-center w-[auto]"
              as="h4"
              variant="h4"
            >
              Child 7
            </Text>
            <Text
              className="my-[3px] not-italic text-black_900 text-center w-[auto]"
              as="h4"
              variant="h4"
            >
              Unique ID
            </Text>
          </div>
          <div className="bg-blue_600 flex flex-row gap-[17px] items-center justify-start outline outline-[2px] outline-black_900 p-[15px] w-[100%]">
            <Text
              className="mb-[7px] mt-[2px] not-italic text-black_900 text-center w-[auto]"
              as="h4"
              variant="h4"
            >
              Child 8
            </Text>
            <Text
              className="my-[4px] not-italic text-black_900 text-center w-[auto]"
              as="h4"
              variant="h4"
            >
              Unique ID
            </Text>
          </div>
          <div className="bg-blue_600 flex flex-row gap-[17px] items-center justify-start outline outline-[2px] outline-black_900 p-[15px] w-[100%]">
            <Text
              className="mb-[7px] mt-[2px] not-italic text-black_900 text-center w-[auto]"
              as="h4"
              variant="h4"
            >
              Child 9
            </Text>
            <Text
              className="my-[4px] not-italic text-black_900 text-center w-[auto]"
              as="h4"
              variant="h4"
            >
              Unique ID
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[15px] md:w-[100%] w-[96%]">
            <Button className="bg-transparent cursor-pointer font-normal leading-[normal] min-w-[44px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-center w-[auto]">
              Edit
            </Button>
            <Button className="bg-transparent cursor-pointer font-normal leading-[normal] min-w-[47px] md:ml-[0] ml-[36px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-center w-[auto]">
              Add
            </Button>
            <Button
              className="common-pointer bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] md:ml-[0] ml-[561px] not-italic py-[8px] rounded-[21px] text-[20px] text-center text-white_A700 w-[auto]"
              onClick={() => navigate("/programsnoneopen")}
            >
              Programs
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-[17px] justify-start mb-[296px] md:ml-[0] ml-[27px] md:px-[20px] md:w-[100%] w-[4%]">
          <Text
            className="common-pointer bg-white_A700 bottom-[715px] flex h-[40px] items-center justify-center not-italic outline outline-[1px] outline-black_900 relative rounded-[50%] text-black_900 text-center w-[40px]"
            variant="body2"
            onClick={() => navigate("/")}
          >
            Logout
          </Text>
          <Img
            src="images/img_scrollbar.svg"
            className="h-[373px] md:ml-[0] ml-[8px] w-[auto]"
            alt="scrollbar"
          />
        </div>
      </div>
    </>
  );
};

export default HomepagepatientsPage;
