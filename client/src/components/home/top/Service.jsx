import React from "react";
import classes from "./top.css";

const Service = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
        This is MERN Stuck application made by <i>Shota</i>
      </h2>
      <div className="ServiceContainer" style={classes.ServiceContainer}>
        <div className="Service" style={classes.Service}>
          <h3>Manage Your Books</h3>
          <div className="Icons" style={classes.Icons}>
            <i className="fas fa-book"></i>
          </div>
          <p style={{ lineHeight: "2", marginTop: "15px", padding: "10px" }}>
            You can manage your books base on a status."Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Minima labore magni assumenda
            laboriosam nesciunt animi dolorem inventore mollitia nihil,
            possimus, vitae odio. Veniam alias, mollitia ab rem tenetur sint
            ex."
          </p>
        </div>
        <div className="Service" style={classes.Service}>
          <h3>Take Memos</h3>
          <div className="Icons" style={classes.Icons}>
            <i className="fas fa-pen-nib"></i>
          </div>
          <p style={{ lineHeight: "2", marginTop: "15px", padding: "10px" }}>
            You can take meomos while reading a book."Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Minima labore magni assumenda
            laboriosam nesciunt animi dolorem inventore mollitia nihil,
            possimus, vitae odio. Veniam alias, mollitia ab rem tenetur sint
            ex."
          </p>
        </div>
        <div className="Service" style={classes.Service}>
          <h3>Get Trends</h3>
          <div className="Icons" style={classes.Icons}>
            <i className="fas fa-stream"></i>
          </div>
          <p style={{ lineHeight: "2", marginTop: "15px", padding: "10px" }}>
            You can see books which are read by other users."Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Minima labore magni assumenda
            laboriosam nesciunt animi dolorem inventore mollitia nihil,
            possimus, vitae odio. Veniam alias, mollitia ab rem tenetur sint
            ex."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
