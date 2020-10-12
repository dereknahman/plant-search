import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import styles from "./Homepage.module.css";
import useResults from "../../utils/hooks/useResults";

const Homepage = () => {
  const [term, setTerm] = useState("");
  const { searchApi, errorMessage, results } = useResults();

  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.header}>Plant search</h1>
        <h2 className={styles.subHeader}>Find your favourite plant</h2>
      </header>
      <SearchBar
        value={term}
        onTermChange={setTerm}
        onTermSubmit={(event) => {
          searchApi(term);
          event.preventDefault();
        }}
      />
      <ul>
        {results.map((plant) => (
          <li key={plant.id}>
            <h3>{plant.common_name}</h3>
            <p>Family name: {plant.family_common_name}</p>
            <p>Scientific name: {plant.scientific_name}</p>
            <img
              src={plant.image_url}
              alt="photographs of plantlife"
              style={{ maxHeight: "230px", maxWidth: "250px" }}
            />
          </li>
        ))}
      </ul>
      {errorMessage ? <p>{errorMessage}</p> : null}
    </div>
  );
};

export default Homepage;
