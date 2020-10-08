import { useState } from "react";
import trefle from "../../api/trefle";

export default () => {
  const [results, setResults] = useState([]);
  // const [term, setTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  console.log("results state var coming from hook", results);

  const searchApi = async (term) => {
    try {
      const { data } = await trefle.get(`/plants`, {
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
