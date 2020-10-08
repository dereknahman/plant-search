import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import styles from "./Homepage.module.css";
import useResults from "../../utils/hooks/useResults";

const Homepage = () => {
  const [term, setTerm] = useState("");
  const [searchApi, errorMessage, results] = useResults();

  console.log(results, "results state var coming from Homepage");

  const renderList = results.map((tree) => {
    return (
      <div key={tree.common_name}>
        <h3>{tree.common_name}</h3>
        <p>Family name: {tree.family_common_name}</p>
        <p>Scientific name: {tree.scientific_name}</p>
        <img
          src={tree.image_url}
          alt="pictures of trees"
          style={{ maxHeight: "230px", maxWidth: "250px " }}
        />
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.header}>Plant search</h1>
        <h2 className={styles.subHeader}>Find your favourite plant</h2>
      </header>
      <SearchBar
        term={term}
        value={term}
        onChange={(event) => {
          setTerm(event.target.value);
        }}
        onTermSubmit={(event) => {
          searchApi(term);
          event.preventDefault();
        }}
      />
      {renderList}
      {errorMessage ? <p>{errorMessage}</p> : null}
    </div>
  );
};

export default Homepage;
