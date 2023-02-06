import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import { useFormik } from "formik";

//icons
import { HiddenPasswordIcon } from "../../assets/icons/hide-password";
import Button from "../../components/common/button";
import Spinner from "../../components/common/spinner";
import { Link, useNavigate } from "react-router-dom";
import { loginAccountAction } from "../../store/account/account.actions";
import { Routes } from "../../routes/Routes";
import { resetAccount } from "../../store/account/account.reducer";
import PageLoading from "../../components/common/page-loading";

export default function SignIn() {
  const dispatch = useDispatch();
  const { errorMessage, isLoginingStatus } = useSelector(
    (state) => state.account
  );
  const navigate = useNavigate();
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const toggleVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },

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
      return errors;
    },

    onSubmit: async (values, { setSubmitting }) => {
      dispatch(
        loginAccountAction({
          email: values.email,
          password: values.password,
        })
      );
    },
  });

  useEffect(() => {
    dispatch(resetAccount());
  }, []);

  if (isLoginingStatus === "success") {
    navigate(Routes.dashboard);
  }

  return (
    <div className="auth-page space-y-10 w-full sm:w-[20.4rem]">
      <div className="mx-auto w-[152px] h-fit"></div>

      <h4 className="font-Euclid font-normal text-center">Login</h4>

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

        <div className="form-row mb-10">
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

        <div className="form-row w-full">
          <label className="text-center block mx-auto w-full">
            No account yet?{" "}
            <span className="text-primary">
              <Link to={Routes.signup}>Sign up</Link>
            </span>
          </label>
        </div>

        <div className="relative">
          {isLoginingStatus === "loading" ? (
            <Spinner />
          ) : (
            <Button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full"
            >
              Sign In
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
