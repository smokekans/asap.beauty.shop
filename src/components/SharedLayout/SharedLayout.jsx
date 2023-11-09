import React, { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";
import Cookies from "js-cookie";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";

function SharedLayout() {
  const token = Cookies.get("accessToken");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        Cookies.set("accessToken", user.accessToken, { expires: 7 });
        Cookies.set("id", user.uid, { expires: 7 });
        console.log(token);
      } else {
        console.log(" User is signed out");
      }
    });
  }, [token]);

  return (
    <>
      <Header accessToken={token} />
      <Box component="main" sx={{ minHeight: "100vh" }}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
    </>
  );
}
export default SharedLayout;
