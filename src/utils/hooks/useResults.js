import { useState } from "react";
import trefle from "../../api/trefle";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (term) => {
    try {
      const { data } = await trefle.get(`/plants/search`, {
        params: {
          q: term,
        },
      });
      setResults(data.data);
    } catch (err) {
      setErrorMessage("No data found. Are you sure you spelled it right?");
    }
  };

  return { searchApi, errorMessage, setErrorMessage, results };
};
