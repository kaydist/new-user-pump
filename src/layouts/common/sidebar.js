import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

//SVGS
import DashboardIcon from "../../assets/icons/dashboard";
import TransactionIcon from "../../assets/icons/transaction";
import FillWalletIcon from "../../assets/icons/fill-wallet";
import FillUserIcon from "../../assets/icons/fill-user";
import FillUserAltIcon from "../../assets/icons/fill-user-alt";
import PeopleAltIcon from "../../assets/icons/people-alt";
import { Routes } from "../../routes/Routes";

function Sidebar() {
  const navigate = useNavigate();

  const activeLink = window.location.pathname;

  const SidebarLinks = [
    { icon: <DashboardIcon />, title: "Home", link: Routes.dashboard },
    {
      icon: <TransactionIcon />,
      title: "Transaction",
      link: Routes.transactions,
    },
  ];

  const changeRoute = (title, link) => {
    navigate(link);
  };

  return (
    <div className="w-52 xl:w-64 h-screen fixed z-20">
      <div className="py-4 mb-8 xl:mb-10 xl:py-6 px-8 xl:px-10 start w-[140px] xl:w-[180px] h-auto">
        {/* <Image src={LightLogo} alt="Pump" /> */}
      </div>

      <ul className="w-full  space-y-7 xl:space-y-8 px-7 xl:px-9">
        {SidebarLinks.map((item, idx) => {
          const { icon, title, link } = item || {};

          return (
            <li
              className="text-xs xl:text-sm start cursor-pointer"
              key={idx}
              onClick={(title) => changeRoute(title, link)}
            >
              <span
                className={
                  activeLink.includes(link) && !activeLink.endsWith("/")
                    ? "center text-primary w-4 h-4 xl:w-6 xl:h-6"
                    : "center text-[#4A5568] w-4 h-4 xl:w-6 xl:h-6"
                }
              >
                {icon}
              </span>

              <span className="inline-block ml-4 xl:ml-5">{title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
