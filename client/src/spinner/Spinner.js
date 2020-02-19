import React from "react";
import classes from "./spinner.css";

// これはコンポーネントを返しているので、/spinner 配下のファイルはまとめて /components に合ったほうが適切に思います

const Spinner = () => {
  return (
    <div className="Loader" style={classes.Loader}>
      Loading...
    </div>
  );
};

export default Spinner;
