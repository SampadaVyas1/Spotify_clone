import React, { useContext } from "react";
import { Context } from "../../context/appcontext";
import styles from "./Favourties.module.scss";
import Search from "../../component/Search/Search";
import MusicList from "../../component/MusicList/MusicList";

const Favourties = () => {
  const { favourtiesList } = useContext(Context);
  const handleOnClickMusicList = () => {};
  return (
    <>
      <div className={styles.title}>Favourties</div>
      <Search className={styles.searchContainer} />
      <MusicList data={favourtiesList} />
    </>
  );
};

export default Favourties;
