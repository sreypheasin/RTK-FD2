import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCreateUser,
  selectUser,
  selectUserStatus,
  selectError
} from "../../redux/feature/user/userSlice";
import { useNavigate } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { useEffect } from "react";

// Regex for strong password
const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const initialValues = {
  email: "",
  username: "",
  password: "Qwer1234@",
  confirmPassword: "Qwer1234@"
};
// validationSchema
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  username: Yup.string().required("First name is required"),
  password: Yup.string()
    .matches(
      strongPasswordRegex,
      "Password must contain at least one uppercase, one lowercase, number and spacial character."
    )
    .required("Password is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm Password must match")
    .required("Confirm password is required")
});

export default function Register() {
  const dispatch = useDispatch();
  const userResponse = useSelector(selectUser);
  const status = useSelector(selectUserStatus);
  console.log("statue", status);
  const navigate = useNavigate();
  console.log("userResponse", userResponse);

  const [showPassword, setShowPassword] = useState(false);
  // show password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //   handle navigate to verify
  const handleNavigate = () => {
    if (userResponse?.message) {
      navigate("/verify");
    }
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
          onSubmit={async (values, { resetForm }) => {
            try {
              await dispatch(fetchCreateUser(values));
              handleNavigate();
              resetForm();
            } catch (error) {
              console.error("Failed to create user:", error);
            }
          }}
        >
          <Form>
            {userResponse.status && (
              <Alert color="failure" className="mb-5">
                {userResponse?.errors[0]?.error}
              </Alert>
            )}
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
                htmlFor="confirmPassword"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <div className="relative">
                <Field
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
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
                name="confirmPassword"
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
