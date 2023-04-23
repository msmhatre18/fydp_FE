import React from "react";
import { useState, useEffect } from "react";
import ClientRow from "components/ClientRow";
import { Text, Button, Img } from "components";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "constants/constants";
import './../../styles/DataCollection.css';


const HomepagepatientsPage = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState(null);

  useEffect(() => {
    const sessionToken = sessionStorage.getItem("sessionToken");
    axiosClient.get("/practitioner/client", {
      headers: {
        'sessionToken': sessionToken,
      }
    })
      .then(res => {
        console.log(res);
        setClients(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);




  let clientRows;
  if (!clients) {
    clientRows = (
      <></>
    );
  }
  else {
    clientRows = (
      <>
        {[...clients]
          .sort((a, b) => a.kidsAbilityId.localeCompare(b.kidsAbilityId))
          .map(client => <ClientRow key={client.kidsAbilityId} kidsAbilityId={client.kidsAbilityId} className="flex flex-row items-end justify-start md:ml-[0] ml-[7px] mt-[40px] md:w-[100%] w-[78%]" />)}
      </>
    );
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter gap-[12px] items-center justify-end mx-[auto] pt-[11px] w-[100%]">
        <div className="data-collection" style={{ display: 'flex', gap: '25px'}}>
          <Img
            src="images/img_arrowup.svg"
            className="h-[33px] md:mt-[0] mt-[3px] w-[auto]"
            alt="arrowup"
            onClick={() => navigate(-1)}
          />
          <Text
            className="md:ml-[0] ml-[370px] not-italic text-black_900"
            as="h2"
            variant="h2"
            style={{ display: 'flex', gap: '50px', justifyContent: 'center' }}
          >
            Clients
          </Text>
          <Text
            className="common-pointer bg-white_A700 flex h-[40px] items-center justify-center mb-[3px] md:ml-[0] ml-[320px] not-italic outline outline-[1px] outline-black_900 rounded-[50%] text-black_900 text-center w-[40px]"
            variant="body2"
            onClick={() => navigate("/")}
          >
            Logout
          </Text>
        </div>

        <div className="flex flex-col items-center justify-center mt-10 w-full md:flex-row md:gap-4 md:justify-between md:mt-20">
          {clientRows}
        </div>

        <div className=""  style={{ display: 'flex', gap: '50px', justifyContent: 'center' }}>
          <Button
            style={{ fontWeight: "bold" }}
            className="replace-button"
            onClick={() => navigate("/addclienttopractitioner", { state: { clients: clients } })}
          >
            Add Client
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomepagepatientsPage;
