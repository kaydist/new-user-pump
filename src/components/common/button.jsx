import React from "react";

export default function Button({ className, children, onClick, ...rest }) {
  return (
    <button
      className={`text-xs xl:text-sm transition-color duration-200 ${className} ${
        className !== undefined && className.includes("bg")
          ? ""
          : `bg-primary hover:bg-darker-primary active:bg-darker-primary text-white`
      }`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
