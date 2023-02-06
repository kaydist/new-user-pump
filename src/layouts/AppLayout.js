import React, { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Routes } from "../routes/Routes";
import Sidebar from "./common/sidebar";
import MobileFloatbar from "./common/mobile-floatbar";

function AppLayout({ children }) {
  const { loggedOutStatus, isLoginingStatus } = useSelector(
    (state) => state.account
  );
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.innerWidth < 920 ? setIsMobile(true) : setIsMobile(false);
    window.addEventListener("resize", () => {
      window.innerWidth < 920 ? setIsMobile(true) : setIsMobile(false);
    });
  }, []);

  useEffect(() => {
    if (isLoginingStatus !== "success") {
      navigate(Routes.signin);
    }
  }, []);
  return (
    <div className="font-Euclid in-app">
      <>
        <Sidebar />

        <MobileFloatbar />

        <div className="md:ml-52 xl:ml-64 px-7 xl:px-10 pb-4 xl:pb-6 min-h-screen bg-body-bg bg-[#FAFAFA] text-sm xl:text-base">
          {children}
        </div>
      </>
    </div>
  );
}

export default AppLayout;
