import React from "react";
import './../../styles/Homepage.css';
import { Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const ClientRow = ({handleAddClient, className, kidsAbilityId, addClientButton=false}) => {
  const navigate = useNavigate();
  let button = addClientButton ?
    (
      <Button
        className="common-pointer bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] md:ml-[0] ml-[561px] not-italic py-[8px] rounded-[21px] text-[20px] text-center text-white_A700 w-[auto]"
        onClick={() => handleAddClient(kidsAbilityId)}
      >
        Add Client
      </Button>
    )
      :
    (
      <Button
        className="common-pointer bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] md:ml-[0] ml-[561px] not-italic py-[8px] rounded-[21px] text-[20px] text-center text-white_A700 w-[auto]"
        onClick={() => navigate("/programsnoneopen",  { state: { kidsAbilityId: kidsAbilityId } })}
      >
        View Programs
      </Button>
    );

  return (
    <>
      <div className={`home-page ${className}`}>
        <Text
          className="text-container"
          as="h4"
          variant="h4"
        >
          {kidsAbilityId}
        </Text>
        {button}
      </div>
    </>
  );
};

ClientRow.defaultProps = {};

export default ClientRow;
