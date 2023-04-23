import React from "react";
import { useState } from "react";
import { Img, Text, Button } from "components";
import './../../styles/DataCollection.css';
import './../../styles/input.css';
import { useNavigate } from "react-router-dom";
import { axiosClient } from "constants/constants";
const NewPasswordPage = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const handleSubmit = () => {
        const url = encodeURI("/account/change-password");
        const sessionToken = sessionStorage.getItem("sessionToken");
        axiosClient.post(url, {
            'password': password
        }, {
            headers: {'sessionToken': sessionToken},
        })
        .then((res) => {
            console.log("changed");
            navigate("/accountdashboard")
        })
    }

    return (
        <>
            <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[15px] w-[100%]">
                <div className="flex flex-col gap-[56px] items-center justify-start max-w-[1103px] mb-[103px] mt-[2px] mx-[auto] md:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[56px] items-center justify-start w-[100%]">
                        <div className="data-collection"  style={{ display: 'flex', gap: '25px'}}>
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
                                Change Password
                            </Text>
                            <Text
                                className="common-pointer bg-white_A700 flex h-[40px] items-center justify-center mb-[3px] md:ml-[0] ml-[320px] not-italic outline outline-[1px] outline-black_900 rounded-[50%] text-black_900 text-center w-[40px]"
                                variant="body2"
                                onClick={() => navigate("/")}
                            >
                                Logout
                            </Text>
                        </div>
                        <div className="data-container" style={{ display: 'flex', flexDirection: 'column', gap: '50px', justifyContent: 'center', alignItems: 'center' }}>
                            <input
                                type="text"
                                placeholder="New Password"
                                className="input-box"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {
                                password.length == 0 ? 
                                <button className="replace-button" style={{ backgroundColor: 'grey' }} disabled>Submit</button>
                                    :
                                <button className="replace-button" style={{ backgroundColor: 'green' }} onClick={handleSubmit}>Submit</button>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default NewPasswordPage;
