import * as actionTypes from "../actions/type";

const memo_reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CREATE_MEMO:
      const stateCopy = Object.assign({}, state);
      stateCopy.memos.push(action.payload);
      return { ...state, memos: stateCopy.memos };
    case actionTypes.FETCH_MEMOS:
      return { ...state, memos: action.payload };
    case actionTypes.DELETE_MEMO:
      return { ...state };
    default:
      return {
        ...state
      };
  }
};

export default memo_reducer;
