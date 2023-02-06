import React from "react";
import { useMemo, useEffect } from "react";

//icons
import CloseIcon from "../../assets/icons/cross";

function Modal({ ref, state, close, children }) {
  const showClass =
    state === true
      ? "fixed top-0 left-0 w-full h-screen bg-[#00000060] modal z-50 opacity-1 transition-all"
      : "fixed -top-[100%] left-0 w-screen h-screen bg-[#00000060] modal z-50 opacity-0 transition-all";

  // const showContentClass =
  //   state === true
  //     ? "mx-auto w-[24rem] scale-100 transition-all"
  //     : "mx-auto w-[24rem] scale-0 transition-all";

  return (
    <div className={showClass} ref={ref} id="modal">
      <div className="w-full absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4">
        <div className="mx-auto w-[18rem] md:w-[24rem] scale-100 transition-all" id="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
}

const ModalHeader = ({ children, close }) => {
  return (
    <div className="modal-header text-center relative pb-4 border-b font-medium">
      {children}

      <button className="p-0 absolute top-0 right-6" onClick={close}>
        <CloseIcon />
      </button>
    </div>
  );
};

const ModalBody = ({ children }) => {
  return <div className="modal-body px-6 pt-5">
    {children}
  </div>;
};

export { Modal, ModalHeader, ModalBody };
