import React from "react";
import BookCard from "./BookCard";
import { Card } from "semantic-ui-react";
import Spinner from "../../../../spinner/Spinner";

const renderCards = (cards, loading) => {
  if (loading) return <Spinner />;
  if (cards.length === 0) return <h2>No results</h2>;
  return cards[0].map(card => {
    return <BookCard key={card._id} card={card} />;
  });
};

const CardList = ({ cards, loading }) => {
  console.log(cards[0]);
  return (
    <div
      style={{
        marginTop: "30px",
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
      }}
    >
      <Card.Group>{renderCards(cards, loading)}</Card.Group>
    </div>
  );
};

export default CardList;
