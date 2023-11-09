import { useState } from "react";
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import { Box } from "@mui/material";

export default function AuthPage() {
  const [signInCheck, setSignInCheck] = useState(true);

  const changeSignIn = () => {
    setSignInCheck(false);
  };
  const changeSignUp = () => {
    setSignInCheck(true);
  };

  return (
    <Box sx={{ mt: 10 }}>
      {signInCheck ? (
        <SignIn changeCheck={changeSignIn} />
      ) : (
        <SignUp changeCheck={changeSignUp} />
      )}
    </Box>
  );
}
