import { Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/common/button";
import { Modal, ModalBody, ModalHeader } from "../components/common/modal";
import Spinner from "../components/common/spinner";
import { depositAction } from "../store/transaction/transaction.actions";
import { checkLength, removeSpecialCharacters } from "../utils/formatter";

function TopUpWallet({ showTopUpModal, setShowTopUpModal }) {
  const dispatch = useDispatch();
  const { depositErrorMessage, isDepositingStatus } = useSelector(
    (state) => state.transactions
  );
  return (
    <Modal state={showTopUpModal}>
      <div className="py-6 bg-white rounded-xl">
        <ModalHeader
          close={() => {
            setShowTopUpModal(!showTopUpModal);
          }}
        >
          Top Up wallet
        </ModalHeader>

        <ModalBody>
          <Formik
            initialValues={{
              deposit: "",
            }}
            validate={(values) => {
              const errors = {};

              if (!values.deposit) {
                errors.deposit = "Required";
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              dispatch(
                depositAction({
                  deposit: Number(values.deposit),
                })
              );
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit} className="w-full">
                <div className="form-row">
                  <label className="block leading-[18px]">
                    Enter an amount
                  </label>

                  <input
                    type="text"
                    name="deposit"
                    onChange={(e) => {
                      formik.handleChange(e);
                      if (depositErrorMessage.deposit) {
                        formik.errors.deposit = "";
                      }
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.deposit}
                    placeholder=""
                    className="input location bg-inherit min-w-full"
                    pattern="[0-9]*"
                    onKeyDown={checkLength}
                    onKeyUp={removeSpecialCharacters}
                  />

                  <p className="form-error px-4">
                    {formik.errors.deposit &&
                      formik.touched.deposit &&
                      formik.errors.deposit}
                  </p>
                </div>

                <div className="relative">
                  {isDepositingStatus === "loading" ? (
                    <Spinner />
                  ) : (
                    <Button
                      type="submit"
                      disabled={formik.isSubmitting}
                      className="w-full"
                    >
                      Top Up
                    </Button>
                  )}
                </div>
              </form>
            )}
          </Formik>
        </ModalBody>
      </div>
    </Modal>
  );
}

export default TopUpWallet;