import React from "react";
import Spinner from "./spinner";

function PageLoading({ message }) {
  return (
    <div>
      <div className="relative">
        <Spinner />
      </div>

      <p>{message}</p>
    </div>
  );
}

export default PageLoading;
