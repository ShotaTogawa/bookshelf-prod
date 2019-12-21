import axios from "axios";

const accessPoint = process.env.END_POINT || "http://localhost:8000/";

export const api = axios.create({
  baseURL: accessPoint
});
