import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";

function SharedLayout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      {/* <Footer /> */}
    </>
  );
}
export default SharedLayout;
