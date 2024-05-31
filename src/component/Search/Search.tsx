import React from "react";
import styles from "./Search.module.scss";
import SearchIcon from "../../assets/SearchIcon";

const Search = (props: any) => {
  const { className, onChange } = props;
  const handleOnChange = (e: any) => {
    onChange(e.target.value);
  };
  return (
    <div className={`${styles.searchContainer} ${className}`}>
      <input
        type="text"
        onChange={handleOnChange}
        className={styles.input}
        placeholder="Search Song, Artist"
      />
      <SearchIcon />
    </div>
  );
};

export default Search;
