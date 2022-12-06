import React from "react";
import Image from "next/image";
import LightLogo from "../assets/brand/form-logo.png";

export default function MobileScreen() {
  return (
    <div className="col-center space-y-5 h-screen mx-auto">
      <div className="mx-auto w-[152px] h-fit">
        <Image src={LightLogo} alt="LifeSaver" className="w-full" />
      </div>
      Please Use Desktop Browser
    </div>
  );
}
