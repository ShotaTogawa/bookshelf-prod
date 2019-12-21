import axios from "axios";

let accessPoint = "https://bookshelf112.herokuapp.com/";
//"http://localhost:8000/";

export const api = axios.create({
  baseURL: accessPoint
});
