import React,{useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import generateValidationSchema from "../../../Redux/generateUserValidationSchema";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../../Redux/User/Actions/userSignUpAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const state = useSelector((state) => state.userReducer);
  const error = state.error;
  const message = state.message;

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: generateValidationSchema("registration"),
    onSubmit: (userDetails) => {
      dispatch(userRegister(userDetails,() => navigator("/login")));
    },
  });

  useEffect(() => {
    if (error != null) {
      toast.warning(error);
    } else if (message != null) {
      toast.success(message);
    }
  }, [error]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-300">
        <div className="bg-white/50 p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="username" // Change id to "name"
                className={`w-full border rounded px-3 py-2 ${
                  formik.touched.username && formik.errors.username
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="Enter your name"
                {...formik.getFieldProps("username")}
              />
              {formik.touched.username && formik.errors.username && (
                <p className="text-red-500 text-sm">{formik.errors.username}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`w-full border rounded px-3 py-2 ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="Enter your email"
                {...formik.getFieldProps("email")}
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
                className={`w-full border rounded px-3 py-2 ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="Enter your password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm">{formik.errors.password}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className={`w-full border rounded px-3 py-2 ${
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="Confirm your password"
                {...formik.getFieldProps("confirmPassword")}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Already a member?{" "}
            <Link to="/login" className="text-blue-500">
              Log In here
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
};

export default SignUp;
