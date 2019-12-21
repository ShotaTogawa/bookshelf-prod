import React from "react";
import { Rating } from "semantic-ui-react";

const StarRating = props => (
  <Rating icon="star" defaultRating={props.evaluation} maxRating={5} disabled />
);

export default StarRating;
