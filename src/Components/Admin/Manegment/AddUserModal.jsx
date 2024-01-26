import React from "react";
import { useFormik } from "formik";
import generateValidationSchema from "../../../Redux/generateUserValidationSchema";
import { useDispatch } from "react-redux";
import { addNewUser } from "../../../Redux/Admin/Actions/addUserAction";

function AddUserModal({ handleModalClose }) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: generateValidationSchema("registration"),
    onSubmit: (userDetails) => {
      dispatch(addNewUser(userDetails));
      formik.resetForm();
      handleModalClose();
    },
  });

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleModalClose();
        }
      }}
    >
      <div className="bg-gray-600 w-[400px] h-[450px] p-8 rounded shadow-2xl text-center flex flex-col items-center">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-200 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className={`w-full border rounded px-3 py-2 text-black ${
                formik.errors.username ? "border-red-500" : ""
              }`}
              placeholder="Enter your name"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-red-500 text-sm">
                {formik.errors.username}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-200 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full border rounded px-3 py-2 text-black ${
                formik.errors.email ? "border-red-500" : ""
              }`}
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-200 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`w-full border rounded px-3 py-2 text-black ${
                formik.errors.password ? "border-red-500" : ""
              }`}
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-200 text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className={`w-full border rounded px-3 py-2 text-black ${
                formik.errors.confirmPassword ? "border-red-500" : ""
              }`}
              placeholder="Confirm your password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className="text-red-500 text-sm">
                  {formik.errors.confirmPassword}
                </div>
              )}
          </div>
          <div className="flex justify-center mt-3">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUserModal;
