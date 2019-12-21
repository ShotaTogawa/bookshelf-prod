import React from "react";
import StarRating from "../../../common/StarRating";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import defaultImage from "../../../assets/book.png";

const BookCard = ({ card }) => (
  <div style={{ margin: "15px" }}>
    <Link to={`/book/${card._id}`}>
      <Card
        image={
          card.image
            ? "https://bookshelf-bucket.s3-us-west-2.amazonaws.com/image/" +
              card.image
            : defaultImage
        }
        header={card.name}
        meta={card.genre}
        extra={<StarRating evaluation={card.evaluation} />}
      />
    </Link>
  </div>
);

export default BookCard;
