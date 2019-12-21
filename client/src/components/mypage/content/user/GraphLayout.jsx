import React from "react";
import Graph from "./Graph";

const GraphLayout = props => {
  return (
    <>
      <h4 style={{ marginTop: "30px" }}>{props.title}</h4>
      <div style={{ border: "2px solid black", marginRight: "10px" }}>
        <Graph counter={props.counter} />
      </div>
    </>
  );
};

export default GraphLayout;
