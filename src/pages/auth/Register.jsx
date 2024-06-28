import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/feature/user/userSlice";

// Regex for strong password
const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/;
// initialValues
const initialValues = {
  email: "",
  username: "",
  password: "",
  confirmedPassword: ""
};
// validationSchema
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  username: Yup.string().required("First name is required"),
  password: Yup.string()
    .required("Password is required!")
    .matches(
      strongPasswordRegex,
      "Password must contain at least one uppercase, one lowercase, number and spacial character."
    ),
  confirmedPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm Password must match")
    .required("Confirm password is required")
});

export default function Register() {
  const user = useSelector(selectUser);
  console.log("user", user);
  const [showPassword, setShowPassword] = useState(false);
  // show password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section className="h-screen flex justify-center items-center  flex-col">
      <section className="min-w-screen-sm w-1/2 bg-slate-100 p-8 rounded-md">
        <h2 className="text-center text-3xl font-bold text-blue-800 mb-5">
          Register
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(value, { resetForm }) => {
            console.log(value);
          }}
        >
          <Form>
            {/* email */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter email"
              />
              <ErrorMessage
                component="div"
                name="email"
                className="text-red-700 text-sm"
              />
            </div>
            {/* username */}
            <div className="mb-5">
              <label
                htmlFor="username"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                username
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter username"
              />
              <ErrorMessage
                component="div"
                name="username"
                className="text-red-700 text-sm"
              />
            </div>

            {/* password */}
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <div className="relative">
                <Field
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter password"
                />
                {showPassword ? (
                  <IoIosEye
                    onClick={() => handleShowPassword()}
                    className="absolute right-2.5 top-3.5"
                  />
                ) : (
                  <IoIosEyeOff
                    onClick={() => handleShowPassword()}
                    className="absolute right-2.5 top-3.5"
                  />
                )}
              </div>
              <ErrorMessage
                component="div"
                name="password"
                className="text-red-700 text-sm"
              />
            </div>
            {/* confirm password */}
            <div className="mb-5">
              <label
                htmlFor="confirmedPassword"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <div className="relative">
                <Field
                  type={showPassword ? "text" : "password"}
                  id="confirmedPassword"
                  name="confirmedPassword"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter password"
                />
                {showPassword ? (
                  <IoIosEye
                    onClick={() => handleShowPassword()}
                    className="absolute right-2.5 top-3.5"
                  />
                ) : (
                  <IoIosEyeOff
                    onClick={() => handleShowPassword()}
                    className="absolute right-2.5 top-3.5"
                  />
                )}
              </div>
              <ErrorMessage
                component="div"
                name="confirmedPassword"
                className="text-red-700 text-sm"
              />
            </div>
            {/* button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Register
              </button>
            </div>
          </Form>
        </Formik>
      </section>
    </section>
  );
}
