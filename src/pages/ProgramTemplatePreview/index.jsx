import React from "react";
import { useState } from "react";
import { Img, Text, Button } from "components";
import { useNavigate, useLocation } from "react-router-dom";
import LogoutButton from "components/Logout";

const ProgramTemplatePreviewPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [programTemplate, setProgramTemplate] = useState(() => location.state.programTemplate);

    return (
        <>
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
                    Program Templates
                </Text>
                <div className="flex justify-end">
                    <LogoutButton />
                </div>
            </div>

            <iframe src={programTemplate.embeddableLink} width='100%' height='650px' frameborder='0'></iframe>
        </>

    );
}

export default ProgramTemplatePreviewPage;