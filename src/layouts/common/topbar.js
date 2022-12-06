import React from "react";
import { useDispatch } from "react-redux";

//icons
import LogoutIcon from "../../assets/icons/logout";
import FillUserIcon from "../../assets/icons/fill-user";
import ArrowDownIcon from "../../assets/icons/arrow-down";
import Breadcrumb from "./breadcrumb";

import { logOutAction } from "../../store/account/account.actions";
import { useLocation, useNavigate } from "react-router-dom";
import { Routes } from "../../routes/Routes";

export default function Topbar({ breadcrumb }) {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogOut = () => {
    dispatch(logOutAction());
    location.push(Routes.signin);
  };
  return (
    <div className="py-3 between xl:py-5">
      <div className="text-xs xl:text-sm">
        <Breadcrumb breadcrumb={breadcrumb} />
      </div>

      <div className="space-x-5 end xl:space-x-7">
        <div className="space-x-1 cursor-pointer center">
          <div className="p-1 bg-white rounded-full">
            <span className="w-4 h-4 xl:w-5 xl:h-5 center">
              <FillUserIcon />
            </span>
          </div>

          <div className="w-2 h-2 center">
            <ArrowDownIcon />
          </div>
        </div>

        <div
          className="w-4 h-4 cursor-pointer xl:w-5 xl:h-5"
          onClick={handleLogOut}
        >
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
}
