import React, { Component } from "react";
import { Header, Image, Table, Button, Confirm } from "semantic-ui-react";
import moment from "moment";
import { connect } from "react-redux";
import { deleteBook } from "../../../../actions";
import history from "../../../../history";
import Spinner from "../../../../spinner/Spinner";
import defaultImage from "../../../assets/book.png";
import ImageModal from "../table/sub-components/ImageModal";
import { Link } from "react-router-dom";

class BookDetail extends Component {
  state = {
    loading: false,
    open: false,
    modal: false
  };
  openModal = () => this.setState({ modal: true });
  closeModal = () => this.setState({ modal: false });

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  handleDelete = async (event, userId, bookId) => {
    event.preventDefault();
    this.setState({ loading: true });
    await this.props.deleteBook(userId, bookId);
    try {
      this.setState({ loading: false, open: false });
      history.push("/books");
    } catch (e) {
      this.setState({ loading: false });
      console.log(e);
    }
  };

  renderBookInfo = book => {
    // if (!book) return <Spinner />;
    console.log(book._id);
    return (
      <>
        <Image
          src={
            book.image
              ? "https://bookshelf-bucket.s3-us-west-2.amazonaws.com/image/" +
                book.image
              : defaultImage
          }
          size="medium"
        />
        <Table basic="very">
          <Table.Body>
            <Table.Row>
              <Table.Cell>Title</Table.Cell>
              <Table.Cell>
                <Header as="h5">
                  <Header.Content>{book.name}</Header.Content>
                </Header>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Author</Table.Cell>
              <Table.Cell>
                <Header as="h5">
                  <Header.Content>{book.author}</Header.Content>
                </Header>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Genre</Table.Cell>
              <Table.Cell>
                <Header as="h5">
                  <Header.Content>{book.genre}</Header.Content>
                </Header>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Status</Table.Cell>
              <Table.Cell>
                <Header as="h5">
                  <Header.Content>{book.status}</Header.Content>
                </Header>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Progress</Table.Cell>
              <Table.Cell>
                <Header as="h5">
                  <Header.Content>
                    {book.page_nums / book.read_pages
                      ? "0%"
                      : book.page_nums / book.read_pages + "%"}
                  </Header.Content>
                </Header>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Register Date</Table.Cell>
              <Table.Cell>
                <Header as="h5">
                  <Header.Content>
                    {moment(book.createdAt).format("MMM D YYYY")}
                  </Header.Content>
                </Header>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Start Date</Table.Cell>
              <Table.Cell>
                <Header as="h5">
                  <Header.Content>
                    {book.startDate
                      ? moment(book.startDate).format("MMM D YYYY")
                      : ""}
                  </Header.Content>
                </Header>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Finish Date</Table.Cell>
              <Table.Cell>
                <Header as="h5">
                  <Header.Content>
                    {book.endDate
                      ? moment(book.endDate).format("MMM D YYYY")
                      : ""}
                  </Header.Content>
                </Header>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Link to="/books">Back</Link>
              </Table.Cell>
              <Table.Cell>
                <Button
                  icon="file image"
                  inverted
                  color="green"
                  size="mini"
                  onClick={this.openModal}
                >
                  Image
                </Button>
                <ImageModal
                  icon={"calendar alternate outline"}
                  closeModal={this.closeModal}
                  color={"teal"}
                  bookId={book._id}
                  userId={book.userId}
                  modal={this.state.modal}
                />
                <Button size="mini" inverted color="red" onClick={this.open}>
                  Delete
                </Button>
                <Confirm
                  open={this.state.open}
                  onCancel={this.close}
                  onConfirm={event =>
                    this.handleDelete(event, book.userId, book._id)
                  }
                />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </>
    );
  };

  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        {this.state.loading ? <Spinner /> : ""}
        {this.renderBookInfo(this.props.book)}
      </div>
    );
  }
}

export default connect(null, { deleteBook })(BookDetail);
