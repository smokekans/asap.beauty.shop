import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import Cookies from "js-cookie";
import { IconButton } from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useNavigate } from "react-router-dom";

export default function SignOut() {
  //   const token = Cookies.remove("accessToken");
  const navigate = useNavigate();

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        Cookies.remove("accessToken");
        Cookies.remove("id");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <IconButton onClick={signOutUser}>
        <LogoutOutlinedIcon />
      </IconButton>
    </>
  );
}
