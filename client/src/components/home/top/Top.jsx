import React from "react";
import classes from "./top.css";
import Navbar from "./Navbar";
import Service from "./Service";

const Top = () => {
  return (
    <>
      <Navbar />
      <div className="Container" style={classes.Container}>
        <div>
          <h1 className="Greeting" style={classes.Greeting}>
            Keep your books
            <br />
            make your stories
          </h1>
        </div>
      </div>
      <Service />
    </>
  );
};

export default Top;
