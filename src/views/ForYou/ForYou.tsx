import React, { useEffect, useMemo, useState } from "react";
import Search from "../../component/Search/Search";
import styles from "./ForYou.module.scss";
import MusicList from "../../component/MusicList/MusicList";
import MusicPlayer from "../../component/MusicPlayer/MusicPlayer";
import { data } from "../../component/MusicList/data";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import _, { toLower } from "lodash";

const ForYou = () => {
  const [activeSong, setActiveSong] = useState();
  const [listData, setListData] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const handleOnClickMusicList = (currentSong: any) => {
    setActiveSong(currentSong);
  };
  const handleOnChange = _.debounce((value: any) => {
    console.log(value);
    setSearchValue(value);
    const newList = listData.filter((item) =>
      item.label.toLowerCase().includes(value)
    );
    console.log(">>", newList);
  }, 300);
  console.log(searchValue);

  useMemo(() => {}, []);
  return (
    <div className={styles.forYouContainer}>
      <div className={styles.listSection}>
        <div className={styles.title}>For You</div>
        <div>
          <Search
            className={styles.searchContainer}
            onChange={handleOnChange}
          />
          <MusicList
            handleOnClickItem={handleOnClickMusicList}
            data={listData}
          />
        </div>
      </div>
      <div className={styles.musicPlayerContainer}>
        {activeSong ? <MusicPlayer activeSong={activeSong} /> : <></>}
      </div>
    </div>
  );
};

export default ForYou;
