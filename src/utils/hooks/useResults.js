import { useState } from "react";
import trefle from "../../api/trefle";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  console.log("results state var coming from hook", results);

  const searchApi = async (term) => {
    console.log("search", { term });
    try {
      const { data } = await trefle.get(`/plants/search`, {
        params: {
          q: term,
        },
      });
      setErrorMessage("");
      console.log("double data from hook", data.data);
      setResults(data.data);
      // setResults(data.data);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  return [searchApi, errorMessage, results];
};
