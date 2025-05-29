import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterForm = () => {
  const validations = Yup.object({
    name: Yup.string()
      .required("Name Required")
      .min(5, "Name should be minimum 5 characters")
      .max(10, "Name shouldn't be exceed 10 characters"),
    email: Yup.string()
      .required("Email Required")
      .email("Please Enter Valid Email"),
    password: Yup.string()
      .required("Password Required")
      .min(5, "Password Should be minimum 5 characters")
      .max(10, "Password Shouldn't exceed 10 characters"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validations,

    onSubmit: (values) => {
      console.log(values);
    },
  });
  // console.log(formik.values);
  return (
    <div>
      <h1 className="text-center text-primary">
        Register Form using the Formik Hook
      </h1>
      <form
        className="w-50 m-3"
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          className="form-control"
          onChange={formik.handleChange}
        />
        {formik.errors.name ? (
          <div className="text-danger">{formik.errors.name}</div>
        ) : null}
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          className="form-control"
          onChange={formik.handleChange}
        />
        {formik.errors.email ? (
          <div className="text-danger">{formik.errors.email}</div>
        ) : null}
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          className="form-control"
          onChange={formik.handleChange}
        />
        {formik.errors.password ? (
          <div className="text-danger">{formik.errors.password}</div>
        ) : null}
        <button type="submit" className="btn btn-primary m-2">
          Register
        </button>
      </form>
    </div>
  );
};
export default RegisterForm;
