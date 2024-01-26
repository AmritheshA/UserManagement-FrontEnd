import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { editUserAction } from "../../../Redux/Admin/Actions/editUserAction";

function EditUserModal({ handleModalClose, userDetails }) {
  const dispatch = useDispatch();

  console.log("at edit Modal");

  console.log(userDetails);

  const formik = useFormik({
    initialValues: {
      username: userDetails.username,
    },
    validationSchema: yup.object().shape({
      username: yup.string().required("Name is required"),
    }),
    onSubmit: (newName) => {
      dispatch(editUserAction(userDetails.email, newName.username));
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
      <div className="bg-gray-600 w-[400px] h-[200px] p-8 rounded shadow-2xl text-center flex flex-col items-center">
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
          {/* Add other input fields for editing */}
          <div className="flex justify-center mt-3">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUserModal;
