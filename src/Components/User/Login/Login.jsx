import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import generateValidationSchema from "../../../Redux/generateUserValidationSchema";
import { userLogin } from "../../../Redux/User/Actions/userLoginAction";
import LoadingAnimation from "../Loading../Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);
  const isLoading = state.loading;
  const error = state.error;
  const message = state.message;
  const isAuthenticated = state.isAuthenticated;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: generateValidationSchema("login"),
    onSubmit: (credentials) => {
      dispatch(userLogin(credentials));
    },
  });

  useEffect(() => {
    if (error != null) {
      toast.error(error);
    } else if (message != null) {
      toast.success(message);
    }
  }, [error]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-300">
        <div className="bg-white/50 p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          {isLoading ||
            (isAuthenticated && (
              <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-55 flex items-center justify-center">
                <LoadingAnimation />
              </div>
            ))}

          {formik.errors.form && (
            <p className="text-red-500 text-sm mb-4">{formik.errors.form}</p>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit(e);
              if (Object.keys(formik.errors).length === 0) {
              }
            }}
          >
            <div className="mb-4">
            <label
                htmlFor="email" 
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email 
              </label>
              <input
                type="text"
                id="email"  
                name="email" 
                className={`w-full border rounded px-3 py-2 ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="Enter your email"  
                value={formik.values.email} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={`w-full border rounded px-3 py-2 ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm">{formik.errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className={`bg-blue-500 text-white px-4 py-2 rounded ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1200}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Login;
