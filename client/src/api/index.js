import axios from "axios";

let accessPoint = process.env.REACT_APP_ACCESS_POINT;

export const api = axios.create({
  baseURL: accessPoint
});
