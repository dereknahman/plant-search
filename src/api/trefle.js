import axios from "axios";

export default axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1`,
  headers: {
    Authorization: process.env.REACT_APP_API_KEY,
  },
});
