import React from "react";
import './../../styles/Homepage.css';
import { Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const ClientRow = ({className, kidsabilityId}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`home-page ${className}`}>
        <Text
          className="text-container"
          as="h4"
          variant="h4"
        >
          {kidsabilityId}
        </Text>
        <Button
              className="common-pointer bg-blue_600 cursor-pointer font-normal leading-[normal] min-w-[254px] md:ml-[0] ml-[561px] not-italic py-[8px] rounded-[21px] text-[20px] text-center text-white_A700 w-[auto]"
              onClick={() => navigate("/programsnoneopen")}
            >
              View Programs
        </Button>
      </div>
    </>
  );
};

ClientRow.defaultProps = {};

export default ClientRow;
