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
      setErrorMessage("Something went wrong");
    }
  };

  return [searchApi, errorMessage, results];
};
