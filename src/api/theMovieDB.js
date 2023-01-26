import axios from "axios";

export const API_KEY = "410bdc996cd1816dbd359443c6c9970b";

export default axios.create({
  baseURL: process.env.BASE_URL,
});
