import React from "react";
import { useState, useEffect } from "react";
import { Img, Text } from "components";
import { useNavigate, useLocation } from "react-router-dom";
import { axiosClient } from "constants/constants";
import LogoutButton from "components/Logout";

const BehaviourDataHistory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [excelLink, setExcelLink] = useState(null);
  useEffect(() => {
    const url = encodeURI(`/client/${location.state.kidsAbilityId}/behaviour/excel`);
    const sessionToken = sessionStorage.getItem("sessionToken");
    axiosClient.get(url, {
      headers: {
        sessionToken: sessionToken
      }
    })
      .then((res) => {
        console.log(res);
        setExcelLink(res.data.excelLink);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);


  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-end mx-[auto] pt-[6px] w-[100%]">
        <div className="flex flex-col gap-[18px] items-center justify-start w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start max-w-[1110px] mx-[auto] md:px-[20px] w-[100%]">
            <Img
              src="images/img_arrowup.svg"
              className="common-pointer h-[33px] md:mt-[0] mt-[11px] w-[auto]"
              onClick={() => navigate(-1)}
              alt="arrowup"
            />
            <Text
              className="md:ml-[0] ml-[308px] md:mt-[0] mt-[17px] not-italic text-black_900 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              {`Behaviour history for ${location.state.kidsAbilityId}`}
            </Text>
            <div className="flex justify-end">
              <LogoutButton />
            </div>
          </div>
          <div className="bg-bluegray_100 flex flex-col gap-[158px] md:gap-[40px] items-center justify-end p-[68px] sm:px-[20px] md:px-[40px] w-[100%]">
            {/* <div className="flex flex-col gap-[52px] items-start justify-start mt-[247px] md:w-[100%] w-[auto]">
              
               
            </div> */}
            {excelLink && <iframe src={excelLink} width='100%' height='650px' frameborder='0'></iframe>}
            <Img
              src="images/img_arrow14_black_900.svg"
              className="h-[1px] w-[auto]"
              alt="arrowFourteen"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BehaviourDataHistory;
