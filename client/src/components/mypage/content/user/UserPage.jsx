import React, { Component } from "react";
import GraphLayout from "./GraphLayout";
import UserStatus from "./UserStatus";
import { Grid } from "semantic-ui-react";
import SideMenu from "../../sidemenu/SideMenu";
import { connect } from "react-redux";
import { setCurrentUser, calculateStatus } from "../../../../actions";

class UserPage extends Component {
  componentDidMount() {
    const local = JSON.parse(localStorage.getItem("user"));
    this.props.setCurrentUser(local.user._id);
    this.props.calculateStatus(local.user._id);
  }

  renderField = () => {
    return this.props.status.map(status => {
      return (
        <Grid columns="three">
          <SideMenu />
          <Grid.Column width={5}>
            <UserStatus
              user={this.props.user}
              status={status[1]}
              cost={status[2]}
            />
          </Grid.Column>
          <Grid.Column width={7}>
            <GraphLayout title={"Genres"} counter={status[0]} />
          </Grid.Column>
        </Grid>
      );
    });
  };

  render() {
    return this.renderField();
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    status: Object.values(state.status)
  };
};

export default connect(mapStateToProps, { setCurrentUser, calculateStatus })(
  UserPage
);
