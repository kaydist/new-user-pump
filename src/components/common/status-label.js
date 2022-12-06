import React from "react";

export default function StatusLabel({ children, className, ...rest }) {
  return (
    <span
      className={`whitespace-nowrap rounded-full py-2 xl:py-1.5 px-4 xl:px-5 ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}
