import React from "react";
import { useState, useEffect } from "react";
import { Img, Text, SelectBox, List, Line, Button } from "components";
import ClientRow from "components/ClientRow";
import { useNavigate, useLocation } from "react-router-dom";
import { axiosClient } from "constants/constants";
import './../../styles/DataCollection.css';
import './../../styles/ProgramRow.css';
import LogoutButton from "components/Logout";


const AddClienttoPractitionerPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [associatedClients, setAssocitatedClients] = useState(() => {
    return new Set(location.state
      .clients
      .map(client => client.kidsAbilityId)
    )
  });
  const [clients, setClients] = useState(new Array());

  useEffect(() => {
    const url = encodeURI("/client");
    const sessionToken = sessionStorage.getItem("sessionToken");
    axiosClient.get(url, {
      headers: {
        sessionToken: sessionToken
      }
    })
      .then((res) => {
        setClients(
          res.data
            .filter(client => !associatedClients.has(client.kidsAbilityId))
            .map(client => client.kidsAbilityId)
        );

      });
  }, [associatedClients])

  const handleAddClient = (kidsAbilityId) => {
    const url = encodeURI("/practitioner/client");
    const sessionToken = sessionStorage.getItem("sessionToken");
    console.log("in handle add client");
    axiosClient.post(url, {
      kidsAbilityId: kidsAbilityId
    }, {
      headers: {
        sessionToken: sessionToken
      }
    }).then(_ => alert(`${kidsAbilityId} has been added`));
    let associatedClientsCopy = new Set([...associatedClients]);
    associatedClientsCopy.add(kidsAbilityId);
    setAssocitatedClients(associatedClientsCopy);
  }

  let clientRows = [...clients]
    .sort((a, b) => a.localeCompare(b))
    .map(client => <ClientRow key={client} kidsAbilityId={client} addClientButton={true} handleAddClient={handleAddClient} />)


  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[6px] w-[100%]">
        <div className="flex flex-col gap-[25px] items-center justify-start max-w-[1102px] mb-[206px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="data-collection" style={{ display: 'flex', gap: '25px' }}>
            <Img
              src="images/img_arrowup.svg"
              className="h-[33px] md:mt-[0] mt-[3px] w-[auto]"
              alt="arrowup"
              onClick={() => navigate(-1)}
            />
            <Text
              className="md:ml-[0] ml-[325px] "
              as="h2"
              variant="h2"
              style={{ display: 'flex', gap: '0px', justifyContent: 'center', textAlign: 'center' }}
            >
              Add Client to Therapist
            </Text>
            <div className="flex justify-end">
              <LogoutButton />
            </div>
          </div>



          <div className="flex md:flex-col flex-row gap-[17px] items-start justify-between w-[100%]">
            <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[auto]">
              <List
                className="flex-col gap-[1px] grid items-center w-[100%]"
                orientation="vertical"
              >
                {clientRows}
              </List>
              <Button style={{ fontSize: "1.5em", fontWeight: "bold", marginTop: "30px" }} className="create-button" onClick={() => navigate("/createclient")}>
                Create New Client
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClienttoPractitionerPage;
