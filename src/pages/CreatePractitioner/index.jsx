import React from "react";
import { useState } from "react";
import { Img, Text, Button } from "components";
import './../../styles/DataCollection.css';
import './../../styles/input.css';
import { useNavigate, useLocation } from "react-router-dom";
import { axiosClient } from "constants/constants";
import LogoutButton from "components/Logout";

const CreatePractitionerPage = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [giveAdminRights, setGiveAdminRights] = useState(false);
    const location = useLocation();
    if(!location.state) return <h1>You are not permitted to view this page</h1>
    const isAdmin = location.state.isAdmin;
    if(!location.state || !isAdmin) return <h1>You are not permitted to view this page</h1>

    const handleSubmit = () => {
        const url = encodeURI("/account/register");
        const sessionToken = sessionStorage.getItem("sessionToken");
        axiosClient.post(url, {
            'email': email,
            'firstName': firstName,
            'lastName': lastName,
            'isAdmin': giveAdminRights
        }, {
            headers: {'sessionToken': sessionToken},
        })
        .then((res) => {
            console.log(res);
            alert(`${firstName} ${lastName} has been successfully registered, they will receive an email with a new temporary password.`);
            navigate("/accountdashboard");
        })
        .catch((err) => {
            console.log(err);
            if(err.response.status === 400) {
                alert(`${firstName} ${lastName} cannot be created, they already exist.`);
            }
            else {
                alert(`${firstName} ${lastName} cannot be created.`);
            }
            setFirstName("");
            setLastName("");
            setGiveAdminRights(false);
        })
    }

    return (
        <>
            <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[15px] w-[100%]">
                <div className="flex flex-col gap-[56px] items-center justify-start max-w-[1103px] mb-[103px] mt-[2px] mx-[auto] md:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[56px] items-center justify-start w-[100%]">
                        <div className="data-collection">
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
                                style={{ textAlign: 'center' }}
                            >
                                Invite Practitioner
                            </Text>
                            <Text
                                className="common-pointer bg-white_A700 flex h-[40px] items-center justify-center mb-[3px] md:ml-[0] ml-[320px] not-italic outline outline-[1px] outline-black_900 rounded-[50%] text-black_900 text-center w-[40px]"
                                variant="body2"
                                onClick={() => navigate("/")}
                            >
                                Logout
                            </Text>
                        </div>
                        <div className="data-container" style={{ display: 'flex', flexDirection: 'column', gap: '25px', justifyContent: 'center', alignItems: 'center' }}>
                            <input
                                type="text"
                                placeholder="Email"
                                className="input-box"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="First Name"
                                className="input-box"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="input-box"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <label> Give Admin Rights?</label>
                            <input type="checkbox" checked={giveAdminRights} onChange={(e) => setGiveAdminRights(e.target.checked)}/>
                            
                            {email.length > 0 && firstName.length > 0 && lastName.length > 0 ? 
                                <button className="replace-button" style={{ backgroundColor: 'green' }} onClick={handleSubmit}>
                                    Submit
                                </button>
                            :
                                <button className="replace-button" style={{ backgroundColor: 'grey' }} disabled>
                                Submit
                            </button>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CreatePractitionerPage;
