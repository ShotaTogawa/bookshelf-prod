import React, { Component } from "react";
import CreateMemo from "./CreateMemo";
import { Comment } from "semantic-ui-react";
import { connect } from "react-redux";
import { showMemos, deleteMemo } from "../../../../actions";
import Spinner from "../../../../spinner/Spinner";
import history from "../../../../history";

class Memo extends Component {
  state = {
    memo: "",
    loading: false
  };

  componentDidMount() {
    const bookId = history.location.pathname.slice(6);
    const local = JSON.parse(localStorage.getItem("user"));
    this.props.showMemos(local.user._id, bookId);
  }

  handleDelete = async (event, userId, bookId, memoId) => {
    event.preventDefault();
    this.setState({ loading: true });
    await this.props.deleteMemo(userId, bookId, memoId.toString());
    try {
      this.setState({ loading: false });
      await this.props.showMemos(userId, bookId);
      history.push(`/book/${bookId}`);
    } catch (e) {
      console.log(e);
      this.setState({ loading: false });
    }
  };

  renderMemo = () => {
    if (!this.props.memos || this.props.memos === 0) return <Spinner />;
    return this.props.memos.map(data => {
      return data.map(memo => {
        return (
          <Comment.Group key={memo._id}>
            <Comment>
              <Comment.Content>
                <Comment.Text>{memo.memo}</Comment.Text>
                <Comment.Actions>
                  <Comment.Action
                    onClick={event =>
                      this.handleDelete(
                        event,
                        memo.userId,
                        memo.bookId,
                        memo._id
                      )
                    }
                  >
                    Delete
                  </Comment.Action>
                  <Comment.Metadata>
                    <div>{memo.createdAt}</div>
                  </Comment.Metadata>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        );
      });
    });
  };
  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <h2>Memo</h2>
        {this.renderMemo()}
        <CreateMemo bookId={this.props.bookId} userId={this.props.userId} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    memos: Object.values(state.memo)
  };
};

export default connect(mapStateToProps, { showMemos, deleteMemo })(Memo);
