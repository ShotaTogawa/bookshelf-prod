import * as actionTypes from "../actions/type";

const status_reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CALCULATE_BOOK_STATUS:
      const genreCounter = {};
      const statusCounter = {};
      const totalCost = { total: 0 };
      action.payload.map(book => {
        if (genreCounter[book.genre]) {
          genreCounter[book.genre] += 1;
        } else {
          genreCounter[book.genre] = 1;
        }
      });

      action.payload.map(book => {
        if (statusCounter[book.status]) {
          statusCounter[book.status] += 1;
        } else {
          statusCounter[book.status] = 1;
        }
        statusCounter["total"] = action.payload.length;
        return statusCounter;
      });

      action.payload.map(book => {
        totalCost["total"] += book.purchased_price;
      });

      return { ...state, status: [genreCounter, statusCounter, totalCost] };
    default:
      return {
        ...state
      };
  }
};

export default status_reducer;
