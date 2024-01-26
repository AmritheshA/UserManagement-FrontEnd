import * as yup from "yup";

const generateValidationSchema = (mode) => {
  let commonSchema = {
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
  };

  switch (mode) {
    case "registration":
      return yup.object().shape({
        ...commonSchema,
        username: yup.string().required("Name is required"),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref("password"), null], "Passwords must match")
          .required("Confirm Password is required"),
      });
    case "login":
      return yup.object().shape({
        ...commonSchema,
      });
    default:
      throw new Error("Invalid mode. Use 'registration' or 'login'.");
  }
};

export default generateValidationSchema;
