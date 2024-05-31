import SpotifyIcon from "../../assets/SpotifyIcon";
import styles from "./SideNavBar.module.scss";
import { listOfSubTitle } from "./data";
import profileImage from "../../assets/Profile.png";

const SideNavBar = (props: any) => {
  const { handleListIemOnclick } = props;

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.spotifyIconContainer}>
        <SpotifyIcon />
      </div>
      <div className={styles.listOfItems}>
        {listOfSubTitle?.map((list, index) => {
          return (
            <div
              className={styles.title}
              key={index}
              onClick={() => handleListIemOnclick(list.title, list.child)}
            >
              {list.title}
            </div>
          );
        })}
      </div>
      <div className={styles.profileImageContainer}>
        <img src={profileImage} alt="" />
      </div>
    </div>
  );
};

export default SideNavBar;
