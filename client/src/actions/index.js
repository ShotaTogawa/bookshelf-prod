import * as actionTypes from "./type";
import { api } from "../api";

// auth
export const signup = formValues => async dispatch => {
  const response = await api.post("/api/signup", formValues);
  dispatch({ type: actionTypes.SIGNUP_USER, payload: response.data });
};

export const signin = formValues => async dispatch => {
  const response = await api.post("/api/signin", formValues);
  dispatch({ type: actionTypes.SIGNUP_USER, payload: response.data });
};

export const signout = () => async dispatch => {
  await api.get("/api/signout");
  dispatch({ type: actionTypes.SIGNOUT_USER });
};

// user
export const setCurrentUser = userId => async dispatch => {
  const response = await api.get(`/api/user/${userId}`);
  dispatch({ type: actionTypes.SET_CURRENT_USER, payload: response.data });
};

// book

export const createBook = (userId, formValues) => async dispatch => {
  const response = await api.post(`/api/books/${userId}`, formValues);
  dispatch({ type: actionTypes.CREATE_BOOK, payload: response.data });
};

// export const fetchBooks = userId => async dispatch => {
//   const response = await api.get(`/api/books/${userId}`);
//   console.log(response);
//   dispatch({ type: actionTypes.FETCH_BOOKS, payload: response.data });
// };

export const fetchBooks = (
  userId,
  status = "beforeReading",
  skip = 0
) => async dispatch => {
  const response = await api.get(`/api/books/${userId}?status=${status}`);
  dispatch({ type: actionTypes.FETCH_BOOKS, payload: response.data });
};

export const fetchBook = (userId, bookId) => async dispatch => {
  const response = await api.get(`/api/books/${userId}/${bookId}`);
  dispatch({ type: actionTypes.FETCH_BOOK, payload: response.data });
};

export const deleteBook = (userId, bookId) => async dispatch => {
  await api.delete(`/api/books/${userId}/${bookId}`);
  dispatch({ type: actionTypes.DELETE_MEMO });
};

export const updateBook = (userId, bookId, formValues) => async dispatch => {
  const response = await api.put(`/api/books/${userId}/${bookId}`, formValues);
  dispatch({ type: actionTypes.EDIT_BOOK, payload: response.data });
};

export const getTimeline = userId => async dispatch => {
  const response = await api.get(`/api/timeline/${userId}`);
  console.log(response);
  dispatch({ type: actionTypes.GET_TIMELINE, payload: response.data });
};

export const updateEvaluation = (
  userId,
  bookId,
  evaluation
) => async dispatch => {
  const response = await api.put(
    `/api/book/evaluation/${userId}/${bookId}`,
    evaluation
  );
  dispatch({ type: actionTypes.UPDATE_EVALUATION, payload: response.data });
};

export const updateStartDate = (userId, bookId, values) => async dispatch => {
  const response = await api.put(
    `/api/book/startdate/${userId}/${bookId}`,
    values
  );
  dispatch({ type: actionTypes.UPDATE_START_DATE, payload: response.data });
};

export const updateEndDate = (userId, bookId, values) => async dispatch => {
  const response = await api.put(
    `/api/book/enddate/${userId}/${bookId}`,
    values
  );
  dispatch({ type: actionTypes.UPDATE_END_DATE, payload: response.data });
};

export const updateReadPages = (
  userId,
  bookId,
  read_pages
) => async dispatch => {
  const response = await api.put(
    `/api/book/read_pages/${userId}/${bookId}`,
    read_pages
  );
  dispatch({ type: actionTypes.UPDATE_READ_PAGES, payload: response.data });
};

export const searchBooks = (userId, params) => async dispatch => {
  const response = await api.get(
    `/api/books/search/${userId}?search=${params}`
  );
  dispatch({ type: actionTypes.SEARCH_BOOKS, payload: response.data });
};

export const calculateStatus = userId => async dispatch => {
  const response = await api.get(`/api/book/calculate/${userId}`);
  dispatch({ type: actionTypes.CALCULATE_BOOK_STATUS, payload: response.data });
};

// memo

export const showMemos = (userId, bookId) => async dispatch => {
  const response = await api.get(`api/books/${userId}/${bookId}/memo`);
  dispatch({ type: actionTypes.FETCH_MEMOS, payload: response.data });
};

export const createMemo = (userId, bookId, formValues) => async dispatch => {
  const response = await api.post(
    `api/books/${userId}/${bookId}/memo`,
    formValues
  );
  dispatch({ type: actionTypes.CREATE_MEMO, payload: response.data });
};

export const deleteMemo = (userId, bookId, memoId) => async dispatch => {
  await api.delete(`api/books/${userId}/${bookId}/memo/${memoId}`);
  dispatch({ type: actionTypes.DELETE_MEMO });
};
