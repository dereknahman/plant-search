import { useState } from "react";
import trefle from "../../api/trefle";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await trefle.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
        },
      });
      //   setResults(response.data[1].common_name);
      console.log(response.data[1].common_name);
    } catch (e) {
      setErrorMessage("Something went wrong");
    }
  };
  return [searchApi, errorMessage, results];
};
