import React from "react";
import { useNavigate } from "react-router-dom";
import { SidebarLinks } from "./sidebar";

function MobileFloatbar() {
  const navigate = useNavigate();

  const activeLink = window.location.pathname;

  const changeRoute = (title, link) => {
    navigate(link);
  };
  return (
    <div className="fixed md:hidden bottom-6 left-1/2 -translate-x-1/2 flex border rounded-md overflow-clip">
      {SidebarLinks.map((item, idx) => {
        const { icon, title, link } = item || {};

        return (
          <li
            className={`text-xs xl:text-sm start bg-white  p-2 ${
              activeLink.includes(link) && !activeLink.endsWith("/")
                ? "bg-primary text-white"
                : "bg-white text-primary"
            }`}
            key={idx}
            onClick={(title) => changeRoute(title, link)}
          >
            <span
              className={
                activeLink.includes(link) && !activeLink.endsWith("/")
                  ? "center w-4 h-4 xl:w-6 xl:h-6"
                  : "center w-4 h-4 xl:w-6 xl:h-6"
              }
            >
              {icon}
            </span>

            <span className="inline-block ml-4 xl:ml-5">{title}</span>
          </li>
        );
      })}
    </div>
  );
}

export default MobileFloatbar;
