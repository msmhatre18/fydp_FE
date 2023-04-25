import React from "react";
import { useState } from "react";
import { Img, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "constants/constants";
import LogoutButton from "components/Logout";

import './../../styles/DataCollection.css';

const CreateClientPage = () => {
  const navigate = useNavigate();
  const [kidsAbilityId, setKidsAbilityId] = useState("");

  const handleSubmit = () => {
    const url = encodeURI("/client");
    const sessionToken = sessionStorage.getItem("sessionToken");
    axiosClient.post(url, {
      kidsAbilityId: kidsAbilityId
    }, {
      headers: {
        sessionToken: sessionToken
      }
    })
      .then(_ => {
        alert(`${kidsAbilityId} has been added`);
        navigate(-1);
      })
      .catch(err => {
        if (err.response.status === 400) {
          alert(`Unable to create ${kidsAbilityId}, ${kidsAbilityId} already exists.`);
        }
        else {
          alert(`Unable to create ${kidsAbilityId}`)
        }
        setKidsAbilityId("");
      })
  }

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[6px] w-[100%]">
        <div className="flex flex-col items-center justify-start max-w-[1102px] mb-[309px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="data-collection" style={{ display: 'flex', gap: '25px' }}>
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
              Create Client
            </Text>
            <div className="flex justify-end">
              <LogoutButton />
            </div>
          </div>
          <Text
            className="mt-[25px] not-italic text-black_900 text-center w-[auto]"
            as="h4"
            variant="h4"
          >
            KidsAbility ID of the client to be added:
          </Text>
          <Input
            wrapClassName="bg-white_A700 mt-[23px] outline outline-[2px] outline-black_900 pb-[2px] pl-[20px] pr-[35px] pt-[7px] w-[57%]"
            className="font-normal leading-[normal] md:text-[22px] not-italic p-[0] placeholder:bg-white_A700 placeholder:text-black_900 sm:pr-[20px] sm:text-[20px] text-[24px] text-black_900 w-[100%]"
            name="group190"
            placeholder="KidsAbility ID"
            value={kidsAbilityId}
            onChange={(e) => setKidsAbilityId(e.target.value)}
          ></Input>
          {kidsAbilityId.length > 0 ?
            <Button
              className="common-pointer bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] mt-[26px] not-italic py-[8px] rounded-[21px] text-[20px] text-black_900 text-center w-[auto]"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            :
            <Button
              className="common-pointer bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] mt-[26px] not-italic py-[8px] rounded-[21px] text-[20px] text-black_900 text-center w-[auto]"
              disabled
            >
              Submit
            </Button>
          }

        </div>
      </div>
    </>
  );
};

export default CreateClientPage;
