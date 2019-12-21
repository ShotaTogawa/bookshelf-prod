import React, { Component } from "react";
import classes from "./auth.css";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated } from ".";
import history from "../../history";

import { signup } from "../../actions";
import Spinner from "../../spinner/Spinner";

const { user } = isAuthenticated();

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    loading: false,
    errors: []
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  isFormEmpty = ({ name, email, password, passwordConfirmation }) => {
    return (
      !name.length ||
      !email.length ||
      !password.length ||
      !passwordConfirmation.length
    );
  };

  isPasswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 6 && passwordConfirmation.length < 6) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    }
    return true;
  };

  isFormValid = () => {
    let errors = [];
    let error;
    if (this.isFormEmpty(this.state)) {
      error = { message: "Please fill in all Fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: "Password is not valid" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };
  displayErrors = errors =>
    errors.map((error, i) => (
      <small key={i} className="form-text alert alert-danger">
        {error.message}
      </small>
    ));

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ errors: [] });
    const { name, email, password } = this.state;
    if (this.isFormValid(this.state)) {
      this.setState({ loading: true, error: [] });
      try {
        await this.props.signup({ name, email, password });
        this.setState({ loading: false });
        history.push("/user");
      } catch (e) {
        this.setState({ loading: false });
      }
    }
  };

  redirectUser = () => {
    if (user) {
      return <Redirect to="/user" />;
    }

    if (!user) {
      return <Redirect to="/signup" />;
    }
  };

  renderForm() {
    return (
      <div className="Form_auth" style={classes.Form_auth}>
        <h1>Signup Form</h1>
        {this.displayErrors(this.state.errors)}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Password confirmation"
            onChange={this.handleChange}
          />
          <button type="submit">Send</button>
        </form>
        <Link to="/signin">Already user?</Link>
      </div>
    );
  }

  render() {
    return (
      <div className="Auth_Container" style={classes.Auth_Container}>
        {this.state.loading ? <Spinner /> : this.renderForm()}
        {this.redirectUser()}
      </div>
    );
  }
}

export default connect(null, { signup })(Signup);
