import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { createMemo } from "../../../../actions";
import Spinner from "../../../../spinner/Spinner";
import history from "../../../../history";

class CreateMemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memo: "",
      loading: false
    };
  }

  handleChange = event => {
    this.setState({ memo: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const bookId = this.props.bookId;
    const userId = this.props.userId;
    const { memo } = this.state;
    this.setState({ loading: true });

    await this.props.createMemo(userId, bookId, {
      memo,
      bookId: bookId,
      userId: userId
    });
    try {
      this.setState({ loading: false });
      history.push(`/book/${bookId}`);
    } catch (e) {
      console.log(e);
    }
  };

  renderForm = () => {
    if (this.state.loading) {
      return <Spinner />;
    }
    return (
      <Form reply onSubmit={this.handleSubmit}>
        <Form.TextArea
          onChange={this.handleChange}
          style={{ marginTop: "20px" }}
        />
        <Button
          content="Add Memo"
          labelPosition="left"
          icon="edit"
          primary
          style={{ marginBottom: "50px" }}
        />
      </Form>
    );
  };

  render() {
    return this.renderForm();
  }
}

export default connect(null, { createMemo })(CreateMemo);
