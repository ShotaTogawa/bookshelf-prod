import React, { Component } from "react";
import CardList from "./CardList";
import SideMenu from "../../sidemenu/SideMenu";
import { Grid, Button, Form } from "semantic-ui-react";
import { searchBooks } from "../../../../actions";
import { connect } from "react-redux";
import Spinner from "../../../../spinner/Spinner";

class SearchBook extends Component {
  state = {
    searchValue: "",
    loading: false
  };

  componentDidMount() {
    const local = JSON.parse(localStorage.getItem("user"));
    this.props.searchBooks(local.user._id, this.state.searchValue);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async () => {
    const local = JSON.parse(localStorage.getItem("user"));
    await this.props.searchBooks(local.user._id, this.state.searchValue);
    try {
      this.setState({ loading: false });
    } catch (e) {
      this.setState({ loading: false, searchValue: "" });
      console.log(e);
    }
  };

  render() {
    console.log(this.props.searchedBooks);
    return (
      <Grid>
        <SideMenu />
        <Grid.Column width={12} style={{ marginTop: "30px" }}>
          <div>
            <h1>Search</h1>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <input
                  className="fas"
                  name="searchValue"
                  type="search"
                  placeholder="Search Book"
                  onChange={this.handleChange}
                  style={{
                    width: "200px",
                    padding: "10px 10px 10px 20px",
                    // borderRadius: "30px",
                    border: "2px solid  #878787",
                    fontSize: "inherit",
                    color: "#373737",
                    marginRight: "10px"
                  }}
                />
                <Button circular icon="search" color="teal" />
              </Form.Field>
            </Form>
            {!this.props.searchedBooks ? (
              <Spinner />
            ) : (
              <CardList
                cards={this.props.searchedBooks}
                loading={this.state.loading}
              />
            )}
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchedBooks: Object.values(state.search)
  };
};

export default connect(mapStateToProps, { searchBooks })(SearchBook);
