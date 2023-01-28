import axios from "axios";

export const API_KEY = `${process.env.API_KEY}`;

export default axios.create({
  baseURL: `${process.env.BASE_URL}`,
});
