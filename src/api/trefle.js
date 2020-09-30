import axios from "axios";

export default axios.create({
  baseURL: `https://trefle.io/api/v1`,
  headers: {
    Authorization: "Bearer GQNO3jvMdet-pXOeozOMBjvsP6cuMwGj_an-nSDgYOI",
  },
});
