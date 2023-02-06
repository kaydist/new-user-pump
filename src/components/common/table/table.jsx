import React from "react";
import Spinner from "../spinner";

const Table = ({ children, isLoading, ...rest }) => {
  return <table {...rest}>{isLoading ? <Spinner /> : children}</table>;
};

const MobileTable = ({ children, isLoading, className, ...rest }) => {
  return (
    <div className={`p-4 card ${className && className}`} {...rest}>
      <div className="flex flex-col gap-2">
        {isLoading ? <Spinner /> : children}
      </div>
    </div>
  );
};

export { Table, MobileTable };
