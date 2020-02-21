import React from "react";
import classes from "./spinner.css";

const Spinner = () => {
  return (
    <div className="Loader" style={classes.Loader}>
      Loading...
    </div>
  );
};

export default Spinner;
