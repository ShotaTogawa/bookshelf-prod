import * as actionTypes from "../actions/type";

const search_reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_BOOKS:
      return {
        ...state,
        [action.payload._id]: action.payload
      };
    default:
      return state;
  }
};

export default search_reducer;
