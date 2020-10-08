import { useState } from "react";
import trefle from "../../api/trefle";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  console.log("results state var coming from hook", results);

  const searchApi = async (searchTerm) => {
    try {
      const { data } = await trefle.get(`/plants`, {
        params: {
          query: searchTerm,
        },
      });
      setResults(data.data);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  return [searchApi, errorMessage, results];
};
