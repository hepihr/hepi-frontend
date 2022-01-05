import React from "react";
import PageHelmet from "../../layouts/PageHelmet";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <PageHelmet pageTitle="Login" />
      <LoginForm />
    </>
  );
};

export default Login;
