import React, { Component } from "react";
import Spinner from "../../../../spinner/Spinner";
import { Link } from "react-router-dom";
import moment from "moment";
import { Table, Image } from "semantic-ui-react";
import DateForm from "./sub-components/DateForm";
import defaultImage from "../../../assets/book.png";

class BeforeReading extends Component {
  renderTableData = books => {
    if (!books) {
      return <Spinner />;
    }
    return books.slice(0, this.props.loadNum).map(data => {
      return (
        <Table.Row key={data._id}>
          <Table.Cell>
            <Link to={`/book/${data._id}`}>
              <Image
                src={
                  data.image
                    ? "https://bookshelf-bucket.s3-us-west-2.amazonaws.com/image/" +
                      data.image
                    : defaultImage
                }
                size="tiny"
              />
            </Link>
          </Table.Cell>
          <Table.Cell>
            <Link to={`/book/${data._id}`}>{data.name}</Link>
          </Table.Cell>
          <Table.Cell>{data.genre}</Table.Cell>
          <Table.Cell>{data.author}</Table.Cell>
          <Table.Cell>{data.page_nums}</Table.Cell>
          <Table.Cell>{moment(data.createdAt).format("MMM D YYYY")}</Table.Cell>
          <Table.Cell>
            <DateForm
              userId={data.userId}
              bookId={data._id}
              status={data.status}
            />
          </Table.Cell>
        </Table.Row>
      );
    });
  };

  render() {
    return <Table.Body>{this.renderTableData(this.props.books)}</Table.Body>;
  }
}

export default BeforeReading;
