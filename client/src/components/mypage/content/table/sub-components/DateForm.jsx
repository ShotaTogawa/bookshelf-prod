import React, { Component } from "react";
import { Button, Popup } from "semantic-ui-react";
import Calendar from "react-calendar";
import { updateStartDate, updateEndDate } from "../../../../../actions";
import { connect } from "react-redux";
import history from "../../../../../history";

class DateForm extends Component {
  state = {
    date: ""
  };

  setDate = date => {
    this.setState({ date });
  };

  handleSubmit = async () => {
    const { userId, bookId, status } = this.props;
    const date = this.state.date;
    if (status === "beforeReading") {
      await this.props.updateStartDate(userId, bookId, {
        startDate: date,
        status: "reading"
      });
      history.push(`/books/${bookId}`);
    } else {
      await this.props.updateEndDate(userId, bookId, {
        endDate: date,
        status: "read"
      });
      history.push(`/books/${bookId}`);
    }
  };

  render() {
    return (
      <Popup
        trigger={
          <Button
            circular
            icon="calendar alternate outline"
            color="teal"
            size="mini"
          />
        }
        flowing
        hoverable
      >
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            {this.props.status === "beforeReading" ? (
              <label>Started Date</label>
            ) : (
              <label>Finished Date</label>
            )}
            <Calendar onChange={this.setDate} />
          </div>
          <Button compact color="blue" size="mini">
            Update
          </Button>
        </form>
      </Popup>
    );
  }
}

export default connect(null, { updateStartDate, updateEndDate })(DateForm);
