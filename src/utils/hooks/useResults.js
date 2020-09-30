import { useState } from "react";
import trefle from "../../api/trefle";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await trefle.get("/plants", {
        params: {
          limit: 10,
          term: searchTerm,
        },
      });
      setResults(response.data[0].common_name);
      console.log(response.data[0].common_name);
    } catch (e) {
      setErrorMessage("Something went wrong");
    }
  };
  return [searchApi, errorMessage, results];
};
