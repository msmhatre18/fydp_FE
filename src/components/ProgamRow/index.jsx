import React from "react";
import './../../styles/ProgramRow.css';
import { Text, Img, Button } from "components";
import { useNavigate } from "react-router-dom";
const ProgamRow = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`program-row ${props.className}`}>
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start ml-[10px] w-[99%]">
          <Text
            as="h4"
            variant="h4"
            style={{ color: "black", fontWeight: "bold" }}
          >
            {props.programTemplate && props.programTemplate.name}
          </Text>
        </div>
        <div className="button-container">
          <button className="create-button" onClick={() => navigate("/programtemplatepreview", {
            state: {
              programTemplate: props.programTemplate,
              kidsAbilityId: props.kidsAbilityId
            }
          })}>Preview Template</button>
          <button className="create-button" onClick={() => navigate("/programdetailsentry", {
            state: {
              programTemplate: props.programTemplate,
              kidsAbilityId: props.kidsAbilityId
            }
          })}>Create New</button>
        </div>
      </div>
    </>
  );
};

ProgamRow.defaultProps = {};

export default ProgamRow;
