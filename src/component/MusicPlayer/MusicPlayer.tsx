import React, { useContext, useRef, useState } from "react";
import styles from "./MusicPlayer.module.scss";
import MoreIcon from "../../assets/MoreIcon";
import VoiceIcon from "../../assets/VoiceIcon";
import PrevIcon from "../../assets/PrevIcon";
import NextIcon from "../../assets/NextIcon";
import PausedIcon from "../../assets/PausedIcon";
import StartIcon from "../../assets/StartIcon";
import { Context } from "../../context/appcontext";

const MusicPlayer = (props: any) => {
  const { setFavourtiesList } = useContext(Context);
  const { activeSong } = props;
  const audioRef = useRef<any>(null);
  const [musicStart, setMusicStart] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [moreIconClick, setMoreIconClick] = useState(false);

  const handleFavouriteList = (activeSong: any) => {
    setFavourtiesList((prev: any) => [...prev, activeSong]);
    setMoreIconClick((prev) => !prev);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (musicStart) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setMusicStart(!musicStart);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (event: any) => {
    const { duration } = audioRef.current;
    const seekTime = duration * (event.target.value / 100);
    setCurrentTime(seekTime);
    audioRef.current.currentTime = seekTime;
  };

  return (
    <div className={styles.musicPlayerContainer}>
      <div className={styles.label}>{activeSong?.label}</div>
      <div className={styles.subTitle}>{activeSong?.album}</div>
      <div>
        <img
          src={activeSong?.image_url}
          alt=""
          height={370}
          width={480}
          className={styles.posterImg}
        />
        <input
          type="range"
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSeek}
          className={styles.voiceBar}
        />
        <div className={styles.startStopMenu}>
          <div className={styles.moreIconWrapper}>
            <div
              className={styles.moreIconContainer}
              onClick={() => setMoreIconClick(!moreIconClick)}
            >
              <MoreIcon />
            </div>
            {moreIconClick && (
              <div
                className={styles.addToFav}
                onClick={() => handleFavouriteList(activeSong)}
              >
                Favourite
              </div>
            )}
          </div>

          <div className={styles.playedIcons}>
            <PrevIcon />
            <audio
              ref={audioRef}
              src="http://h.saavncdn.com/987/cd902d048c13e5ce6ca84cc409746a5d.mp3"
              onTimeUpdate={handleTimeUpdate}
            />
            {!musicStart ? (
              <PausedIcon onClick={togglePlay} />
            ) : (
              <StartIcon onClick={togglePlay} />
            )}
            <NextIcon />
          </div>
          <div className={styles.moreIconContainer}>
            <VoiceIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
