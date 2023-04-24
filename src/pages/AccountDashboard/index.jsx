import React from "react";
import { useState, useEffect } from "react";
import { Img, Text, Button } from "components";
import './../../styles/DataCollection.css';
import { useNavigate } from "react-router-dom";
import { axiosClient } from "constants/constants";
import LogoutButton from "components/Logout";

const AccountDashboardPage = () => {
    const navigate = useNavigate();
    const [practitioner, setPractitioner] = useState(null);

    useEffect(() => {
        const sessionToken = sessionStorage.getItem("sessionToken");
        axiosClient.get("/practitioner", {
            headers: {
                'sessionToken': sessionToken,
            }
        })
            .then(res => {
                console.log(res);
                setPractitioner(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);


    return (
        <>
            <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[15px] w-[100%]">
                <div className="flex flex-col gap-[56px] items-center justify-start max-w-[1103px] mb-[103px] mt-[2px] mx-[auto] md:px-[20px] w-[100%]" >
                    <div className="flex flex-col gap-[56px] items-center justify-start w-[100%]" style={{ display: 'flex', gap: '50px', justifyContent: 'center' }}>
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
                                {practitioner && `${practitioner.firstName}'s Home Page`}
                            </Text>
                            <div className="flex justify-end">
                                <LogoutButton />
                            </div>
                        </div>
                        <div className="data-collection" style={{ display: 'flex', gap: '50px', justifyContent: 'center' }}>
                            <Button className="replace-button" onClick={() => navigate("/Homepagepatients")}>
                                View Clients
                            </Button>
                            {practitioner && practitioner.isAdmin &&
                                <Button className="replace-button" onClick={() => navigate("/CreatePractitioner", { state: { isAdmin: practitioner.isAdmin } })} >
                                    Invite New Therapists
                                </Button>}
                            <Button className="replace-button" onClick={() => navigate("/NewPassword")}>
                                Change Password
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountDashboardPage;
