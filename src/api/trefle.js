import axios from "axios";

export default axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1`,
  timeout: 1000,
  headers: {
    Authorization: "GQNO3jvMdet-pXOeozOMBjvsP6cuMwGj_an-nSDgYOI",
  },
});
