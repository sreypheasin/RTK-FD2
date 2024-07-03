import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  verificationCode: Yup.string().required("OTP code is required")
});

export default function VerifyEmail() {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="w-1/2 bg-slate-50 p-5 rounded-md">
        <h1 className="text-3xl text-blue-800 font-bold text-center">
          Verify Email
        </h1>
        <p className="mb-5 text-center">
          Please check you email for verification code.
        </p>
        <Formik
          initialValues={{
            email: "",
            verificationCode: ""
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <div className="mb-5">
              <Field
                type="text"
                name="verificationCode"
                placeholder="Enter OTP code"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <ErrorMessage
                component="div"
                name="verificationCode"
                className="text-red-700 text-sm"
              />
            </div>
            {/* button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Verify
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
