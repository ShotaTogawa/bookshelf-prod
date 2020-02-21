import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import defaultImage from "../../assets/user.svg";
import classes from "./sidemenu.css";
import { menus } from "../../../utils/variables";
import { Grid } from "semantic-ui-react";
import { signout, setCurrentUser } from "../../../actions";
import ImageModal from "../../mypage/content/table/sub-components/ImageModal";

class SideMenu extends Component {
  state = {
    modal: false
  };
  openModal = () => this.setState({ modal: true });
  closeModal = () => this.setState({ modal: false });

  componentDidMount() {
    const local = JSON.parse(localStorage.getItem("user"));
    this.props.setCurrentUser(local.user._id);
  }
  renderUser = () => {
    return (
      <>
        <div className="User" style={classes.User}>
          <img
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
            src={
              this.props.user.avatar
                ? "https://bookshelf-bucket.s3-us-west-2.amazonaws.com/avatar/" +
                  this.props.user.avatar
                : defaultImage
            }
            alt={this.props.user.name}
            onClick={this.openModal}
          />

          <ImageModal
            icon={"calendar alternate outline"}
            closeModal={this.closeModal}
            color={"teal"}
            userId={this.props.user._id}
            modal={this.state.modal}
            header="Upload Avatar"
          />
        </div>
        <h2
          style={{
            textAlign: "center",
            position: "sticky",
            top: "105px"
          }}
        >
          {this.props.user.name}
        </h2>
      </>
    );
  };

  handleSignout = async () => {
    await this.props.signout();
  };

  renderMenu = () => {
    return menus.map(menu => {
      return (
        <li key={menu.title}>
          <i className={menu.icon}></i>
          &ensp;{menu.title}
          {menu.submenus.length > 0
            ? menu.submenus.map(submenu => (
                <ul key={submenu.title}>
                  <li key={submenu.title}>
                    <Link to={submenu.url}>
                      <i className={submenu.icon}></i>
                      &ensp;{submenu.title}
                    </Link>
                  </li>
                </ul>
              ))
            : ""}
        </li>
      );
    });
  };

  render() {
    return (
      <Grid.Column width={3}>
        <div className="Sidebar" stlye={classes.Sidebar}>
          {this.renderUser()}

          <div className="MenuList" style={classes.MenuList}>
            <ul className="Menu" style={classes.Menu}>
              {this.renderMenu()}
              <li
                onClick={this.handleSignout}
                style={{ cursor: "pointer" }}
                key="logout"
              >
                <i className="fas fa-sign-out-alt"></i>
                &thinsp;&thinsp;Signout
              </li>
            </ul>
          </div>
        </div>
      </Grid.Column>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps, { signout, setCurrentUser })(SideMenu);
