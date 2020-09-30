import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import styles from "./Homepage.module.css";
import useResults from "../../utils/hooks/useResults";

const Homepage = () => {
  const [term, setTerm] = useState("");
  const [searchApi, errorMessage, results] = useResults();

  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.header}>Plant search</h1>
        <h2 className={styles.subHeader}>Find your favourite plant</h2>
      </header>
      <SearchBar
        term={term}
        // value={term}
        onTermChange={(event) => {
          setTerm(event.target.value);
        }}
        onTermSubmit={(event) => {
          searchApi(term);
          event.preventDefault();
        }}
      />
      {errorMessage ? <p>{errorMessage}</p> : null}
    </div>
  );
};

export default Homepage;
