import React from "react";
import Spinner from "./spinner";

const Table = ({ children, isLoading, ...rest }) => {
  return <table {...rest}>{isLoading ? <Spinner /> : children}</table>;
};

export default Table;
