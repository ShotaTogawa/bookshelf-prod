import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchBook } from "../../../../actions";
import BookDetail from "./BookDetail";
import Memo from "../memo/Memo";
import SideMenu from "../../sidemenu/SideMenu";
import Spinner from "../../../../spinner/Spinner";

class BookInfo extends Component {
  componentDidMount() {
    const local = JSON.parse(localStorage.getItem("user"));
    const bookId = this.props.location.pathname.slice(6);
    this.props.fetchBook(local.user._id, bookId);
  }
  renderBook = () => {
    const { book } = this.props;
    if (!book || book.length === 0) return <Spinner />;
    return (
      <>
        <Grid.Column width={5}>
          <BookDetail book={book} />
        </Grid.Column>
        <Grid.Column width={7}>
          <Memo bookId={book._id} userId={book.userId} />
        </Grid.Column>
      </>
    );
  };

  render() {
    return (
      <Grid>
        <SideMenu />
        {this.renderBook()}
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  console.log("book", state.book.book);
  return {
    book: state.book.book,
    user: state.user.user
  };
};

export default connect(mapStateToProps, { fetchBook })(BookInfo);
