import React, { useEffect } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { fetchLogin, selectLogin } from "../../redux/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

// REGEX for strong password
const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// initial values
const initialValues = {
  email: "",
  password: ""
};

// validation schema
const validationSchema = Yup.object({
  email: Yup.string().required("email is required"),
  password: Yup.string()
    .matches(
      strongPasswordRegex,
      "password must contain one uppercase, one lowercase, one special character, number and must at least 8 characters"
    )
    .required("password is required")
});
export default function Login() {
  const notify = () => toast.error("Wow so easy!");
  const navigate = useNavigate();
  const loginData = useSelector(selectLogin);
  // const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  console.log("loginData", loginData);
  // handle toast
  const handleToast = () => {
    loginData && notify();
  };
  // handle navigate
  useEffect(() => {
    if (loginData?.status === 200) {
      navigate("/");
      console.log("login success");
    }
  }, [loginData]);
  return (
    <section>
      <div className="flex justify-center items-center h-screen flex-col">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (value) => {
            console.log(value);
            const submit = await dispatch(fetchLogin(value));
            handleToast();
          }}
        >
          <Form className="w-1/2 bg-slate-50 p-5 rounded-md">
            <div className="mt-5">
              <label htmlFor="email" placeholder="John" required>
                Username or Email
              </label>
              <Field
                type="text"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <ErrorMessage
                component="div"
                name="email"
                className="text-red-600"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="password" required>
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <ErrorMessage
                component="div"
                name="password"
                className="text-red-600"
              />
            </div>
            <div className="flex justify-between  mt-2">
              <a href="/register" className="">
                Don&apos;t have account?{" "}
                <span className="underline text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500">
                  register
                </span>
              </a>
              <a
                href="/forgot-password"
                className="mt-2 underline text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className=" mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </section>
  );
}
