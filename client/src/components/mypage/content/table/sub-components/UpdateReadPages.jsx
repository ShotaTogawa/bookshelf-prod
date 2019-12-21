import React, { Component } from "react";
import { Button, Popup, Form } from "semantic-ui-react";
import { updateReadPages } from "../../../../../actions";
import { connect } from "react-redux";
import history from "../../../../../history";

class UpdateReadPages extends Component {
  state = {
    read_pages: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async () => {
    const { userId, bookId } = this.props;
    const read_pages = this.state.read_pages;
    await this.props.updateReadPages(userId, bookId, { read_pages });
    try {
      history.push("/books");
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <Popup
        trigger={<Button circular icon="book" color="olive" size="mini" />}
        flowing
        hoverable
      >
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Read pages</label>
            <input
              type="text"
              className="form-control"
              name="read_pages"
              placeholder="Enter pages you read"
              onChange={this.handleChange}
            />
          </Form.Field>

          <Button compact color="blue" size="mini">
            Update
          </Button>
        </Form>
      </Popup>
    );
  }
}

export default connect(null, { updateReadPages })(UpdateReadPages);
