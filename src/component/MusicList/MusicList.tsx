import { useEffect, useState } from "react";
import styles from "./MusicList.module.scss";

const MusicList = (props: any) => {
  const { handleOnClickItem, searchValue, data } = props;
  console.log(searchValue);
  const [listOfMusic, setListOfMusic] = useState(data);
  useEffect(() => {
    setListOfMusic((prev: any) => {
      return prev.filter((ele: any) => searchValue === ele);
    });
  }, [searchValue]);
  return (
    <>
      <div className={styles.musicList}>
        {data.map((list: any) => {
          return (
            <div
              className={styles.listWrapper}
              onClick={() => handleOnClickItem(list)}
            >
              <div className={styles.imageTextWrapper}>
                <img
                  src={list.image_url}
                  alt=""
                  width={48}
                  height={48}
                  className={styles.image}
                />
                <div>
                  <div className={styles.title}>{list.label}</div>
                  <div className={styles.subTitle}>{list.album}</div>
                </div>
              </div>
              <div>4:16</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MusicList;
