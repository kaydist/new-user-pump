import React from "react";
import { useRouter } from "next/router";

function BackButton() {
  const router = useRouter();
  return (
    <div className="-ml-7 -pl-5">
      <button
        className="flex items-center pb-6 xl:pb-[34px] pt-0 px-4 font-light text-black bg-transparent"
        onClick={() => {
          router.back();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
        <span className="w-8 text-xs xl:text-sm font-light ">Back</span>
      </button>
    </div>
  );
}

export default BackButton;
