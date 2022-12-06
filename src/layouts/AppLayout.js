import React, { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./common/sidebar";

function AppLayout({ children }) {
  const {loggedOutStatus, isLoginInStatus} = useSelector((state) => state.account);
  // const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.innerWidth < 920 ? setIsMobile(true) : setIsMobile(false);
    window.addEventListener("resize", () => {
      window.innerWidth < 920 ? setIsMobile(true) : setIsMobile(false);
    });
  }, []);

  // if (!authState.loggedIn) {
  //   router.push("/auth/login");
  // } else {
  return (
    <div className="font-Euclid in-app">
      <>
        <Sidebar />

        <div className="ml-52 xl:ml-64 px-7 xl:px-10 pb-4 xl:pb-6 min-h-screen bg-body-bg bg-[#FAFAFA] text-sm xl:text-base">
          {children}
        </div>
      </>
    </div>
  );
  // }
}

export default AppLayout;
