import React from "react";
import classes from "./top.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const link_style = {
  textDecoration: "none",
  color: "#fff",
  aligntems: "center"
};

const Navbar = () => {
  return (
    <div>
      <ul className="Navbar" style={classes.Navbar}>
        <li className="Navbar_item" style={classes.Navbar_item}>
          <img src={logo} alt="logo" style={classes.Navbar_item} />
        </li>
        <li className="Navbar_item" style={classes.Navbar_item}>
          Top
        </li>
        <li className="Navbar_item" style={classes.Navbar_item}>
          About
        </li>
        <li className="Navbar_item" style={classes.Navbar_item}>
          <Link to="/signup" style={link_style}>
            Signup
          </Link>
        </li>
        <li className="Navbar_item" styke={classes.Navbar_item}>
          <Link to="/signin" style={link_style}>
            Signin
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
