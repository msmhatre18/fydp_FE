import { useNavigate } from "react-router-dom";
import { Img } from "components";

import myImage from './../../assets/images/thumbnail.png';

const LogoutButton = () => {
  const navigate = useNavigate();
  return (
    <div className="common-pointer flex items-center justify-center h-[40px] w-[40px] ml-[320px]">
      <Img src={myImage} alt="My Logo" onClick={() => navigate("/")} />
    </div>

  );
};

export default LogoutButton;
