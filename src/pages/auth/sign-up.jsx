import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import { useFormik } from "formik";

//icons
import { HiddenPasswordIcon } from "../../assets/icons/hide-password";
import Button from "../../components/common/button";
import Spinner from "../../components/common/spinner";
import { Link, useNavigate } from "react-router-dom";
import { registerAccountAction } from "../../store/account/account.actions";
import { Routes } from "../../routes/Routes";

export default function SignUp() {
  const dispatch = useDispatch();
  const { errorMessage, isRegisterStatus } = useSelector(
    (state) => state.account
  );
  const navigate = useNavigate();
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const toggleVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  // if (errorMessage === "Ok") {
  //   router.push(Routes.dashboard);
  // }

  const formik = useFormik({
    initialValues: { email: "", password: "", phone_number: "", card_id: '' },

    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      }
      if (!values.password) {
        errors.phone_number = "Required";
      }
      if (!values.card_id) {
        errors.card_id = "Required";
      }
      return errors;
    },

    onSubmit: async (values, { setSubmitting }) => {
      dispatch(
        registerAccountAction({
          email: values.email,
          password: values.password,
          phoneNumber: values.phone_number,
          card_id: values.card_id,
        })
      );
    },
  });

  // useMemo(() => {
  //   (errorMessage?.email && (formik.errors.email = errorMessage?.email[0])) ||
  //     (errorMessage?.password &&
  //       (formik.errors.password = errorMessage?.password[0])) ||
  //     (errorMessage !== "Ok" && (formik.errors.password = errorMessage));
  //   console.log(errorMessage);
  // }, [errorMessage]);

  return (
    <div className="auth-page space-y-10 w-full sm:w-[20.4rem]">
      <div className="mx-auto w-[152px] h-fit"></div>

      <h4 className="font-Euclid font-normal text-center">Signup</h4>

      <form onSubmit={formik.handleSubmit} className="w-full">
        <div className="form-row">
          <label className="block leading-[18px]">Email</label>

          <input
            type="email"
            name="email"
            onChange={(e) => {
              formik.handleChange(e);
              if (errorMessage.email) {
                formik.errors.email = "";
              }
            }}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="admin@Pump.com"
            className="input password bg-inherit min-w-full"
          />

          <p className="form-error px-4">
            {formik.errors.email && formik.touched.email && formik.errors.email}
          </p>
        </div>

        <div className="form-row">
          <label className="block leading-[18px]">Phone Number</label>

          <input
            type="tel"
            name="phone_number"
            onChange={(e) => {
              formik.handleChange(e);
              if (errorMessage.phone_number) {
                formik.errors.phone_number = "";
              }
            }}
            onBlur={formik.handleBlur}
            value={formik.values.phone_number}
            placeholder="080123456789"
            className="input password bg-inherit min-w-full"
          />

          <p className="form-error px-4">
            {formik.errors.phone_number &&
              formik.touched.phone_number &&
              formik.errors.phone_number}
          </p>
        </div>

        <div className="form-row">
          <label className="block leading-[18px]">Password</label>

          <div className="between input-container w-full">
            <input
              type={passwordVisibility ? "password" : "text"}
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="••••••••"
              className="input bg-inherit w-full border-0 focus:border-0"
            />
            <button
              className="inline-block center h-full bg-transparent px-4 hover:bg-transparent py-0 "
              onClick={toggleVisibility}
              type="button"
            >
              <HiddenPasswordIcon />
            </button>
          </div>

          <p className="form-error">
            {formik.errors.password &&
              formik.touched.password &&
              formik.errors.password}
          </p>
        </div>

        <div className="form-row mb-10">
          <label className="block leading-[18px]">Card ID</label>

          <input
            type="text"
            name="card_id"
            onChange={(e) => {
              formik.handleChange(e);
              if (errorMessage.card_id) {
                formik.errors.card_id = "";
              }
            }}
            onBlur={formik.handleBlur}
            value={formik.values.card_id}
            placeholder=""
            className="input password bg-inherit min-w-full"
          />

          <p className="form-error px-4">
            {formik.errors.card_id &&
              formik.touched.card_id &&
              formik.errors.card_id}
          </p>
        </div>

        <div className="form-row w-full">
          <label className="text-center block mx-auto w-full">
            Already have an account?{" "}
            <span className="text-primary">
              <Link to={Routes.signin}>Login</Link>
            </span>
          </label>
        </div>

        <div className="relative">
          {isRegisterStatus === "loading" ? (
            <Spinner />
          ) : (
            <Button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full"
            >
              Sign Up
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
