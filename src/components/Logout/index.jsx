import { useNavigate } from "react-router-dom";
import { Img } from "components";

import myImage from './../../assets/images/thumbnail.png';
import myOtherImage from './../../assets/images/other-thumbnail.png';

const LogoutButton = () => {
  const navigate = useNavigate();
  return (
    <div className="common-pointer flex items-center justify-center h-[30px] w-[90px] ml-[320px]">
      <Img src={myImage} alt="My Logo" onClick={() => navigate("/accountdashboard")} className="h-[55px] w-[55px] mr-[50px]" />
      <Img src={myOtherImage} alt="My Other Logo" onClick={() => navigate("/")} className="h-[55px] w-[55px] " />
    </div>
  );
};

export default LogoutButton;
