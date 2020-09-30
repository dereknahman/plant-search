import { useState } from "react";
import trefle from "../../api/trefle";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await trefle
        .get(`/plants`, {
          params: {
            limit: 20,
            term: searchTerm,
          },
        })
        .then((response) => {
          const responseData = response.data.data;
          const plantNamesArray = responseData.map(
            (plantName) => plantName.common_name
          );
          console.log("plant names array", plantNamesArray);
          setResults(plantNamesArray);
        });
      return response;
    } catch (e) {
      setErrorMessage("Something went wrong");
    }
  };

  return [searchApi, errorMessage, results];
};
