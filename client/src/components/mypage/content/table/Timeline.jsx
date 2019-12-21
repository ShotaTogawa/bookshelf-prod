import React, { Component } from "react";
import { Feed, Grid, Button } from "semantic-ui-react";
import SideMenu from "../../sidemenu/SideMenu";
import { getTimeline } from "../../../../actions";
import { connect } from "react-redux";
import Spinner from "../../../../spinner/Spinner";
import defaultImage from "../../../assets/user.png";

class Timeline extends Component {
  state = {
    loadNum: 5
  };
  componentDidMount() {
    const local = JSON.parse(localStorage.getItem("user"));
    this.props.getTimeline(local.user._id);
  }
  renderTimeline = () => {
    if (!this.props.books) return <Spinner />;
    return this.props.books.slice(0, this.state.loadNum).map((data, i) => {
      return (
        <Feed key={i} style={{ borderBottom: "solid #000 0.5px" }}>
          <Feed.Event>
            <Feed.Label>
              <img
                src={
                  data.userId.avatar
                    ? "https://bookshelf-bucket.s3-us-west-2.amazonaws.com/avatar/" +
                      data.userId.avatar
                    : defaultImage
                }
                alt={data.name}
              />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <span style={{ color: "#3EA4E3" }}>{data.userId.name}</span>{" "}
                added "{data.name}"
              </Feed.Summary>
              <Feed.Extra images>
                {data.image ? (
                  <img
                    src={
                      "https://bookshelf-bucket.s3-us-west-2.amazonaws.com/image/" +
                      data.image
                    }
                    alt={data.name}
                  />
                ) : (
                  ""
                )}
              </Feed.Extra>
              <Feed.Date>{data.createdAt}</Feed.Date>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      );
    });
  };

  render() {
    return (
      <Grid>
        <SideMenu />
        <Grid.Column width={6} style={{ marginTop: "30px" }}>
          <h1>User Timeline</h1>
          {this.renderTimeline()}

          <Button
            inverted
            color="green"
            onClick={() => this.setState({ loadNum: this.state.loadNum + 5 })}
            size="tiny"
          >
            more...
          </Button>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    books: state.book.books
  };
};

export default connect(mapStateToProps, { getTimeline })(Timeline);
