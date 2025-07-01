import { NavLink } from "react-router";
// Images
import podcast from "../../assets/images/podcast.png";
import SpotifyText from "../../assets/icons/spotify-logo-text.svg?react";
import Backward from "../../assets/icons/backward.svg?react";
import Forward from "../../assets/icons/forward.svg?react";
import Dots from "../../assets/icons/tripleDots.svg?react";
import PlayButton from "../../assets/icons/play-button.svg?react";
// Styles
import styles from "./spotifyItem.module.css";

type Props = {};

function SpotifyItem({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img src={podcast} alt="Podcast" className={styles.image} />
        <div className={styles.wrapper}>
          <p className={styles.title}>Episode Title</p>
          <p className={styles.title}>Podcast Name</p>
        </div>
        <SpotifyText className={styles.spotifyIcon} />
      </div>
      <div className={styles.controls}>
        <Backward className={styles.icon} />
        <div className={styles.line}></div>
        <Forward className={styles.icon} />
        <div className={styles.time}>00:00</div>
        <Dots className={styles.icon} />
        <NavLink to="#" className={styles.playButton}>
          <PlayButton />
        </NavLink>
      </div>
    </div>
  );
}

export default SpotifyItem;
