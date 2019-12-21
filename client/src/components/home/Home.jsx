import React from "react";
import { isAuthenticated } from "../auth";
import { Redirect } from "react-router-dom";
import Top from "./top/Top";

const { user } = isAuthenticated();

const redirectUser = () => {
  if (user) {
    return <Redirect to="/user" />;
  }

  if (!user) {
    return <Redirect to="/" />;
  }
};

const Home = () => {
  return (
    <>
      <Top />
      {redirectUser()}
    </>
  );
};

export default Home;
