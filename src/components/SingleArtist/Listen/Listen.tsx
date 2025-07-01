import { NavLink } from "react-router";
// Components
import SpotifyItem from "../../SpotifyItem/SpotifyItem";
import Tours from "../Tours/Tours";
import { MaskText } from "../../AnimatedText/MaskText";
// Images
import Spotify from "../../../assets/icons/spotify.svg?react";
import PlayYoutube from "../../../assets/icons/play-youtube.svg?react";
import PlayYoutubeBtn from "../../../assets/icons/youtube-play.svg?react";
import youtubePreview1 from "../../../assets/images/youtubePreview1.png";
import youtubePreview2 from "../../../assets/images/youtubePreview2.png";
import Star from "../../../assets/icons/star.svg?react";
import Circle from "../../../assets/icons/ball.svg?react";
// Styles
import styles from "./listen.module.css";

function Listen() {
  const songsArray = Array.from({ length: 4 });
  const youtubeArray = [
    { id: 1, url: "#", preview: youtubePreview1 },
    { id: 2, url: "#", preview: youtubePreview2 },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.listen}>
          <MaskText stagger={0.1}>
            <p className={styles.titleListen}>Listen & Watch</p>
          </MaskText>
          <div className={styles.spotiFyContainer}>
            <MaskText stagger={1}>
              <div className={styles.spotiFyTitle}>
                <Spotify className={styles.spotiFyTitle} />
                <p>Listen on Spotify</p>
              </div>
            </MaskText>
            <ul className={styles.spotiFyList}>
              {songsArray.map((_, index) => (
                <MaskText stagger={index + 2} key={index}>
                  <li className={styles.spotifyItem}>
                    <SpotifyItem />
                  </li>
                </MaskText>
              ))}
            </ul>
          </div>
          <div className={styles.youtubeContainer}>
            <MaskText stagger={3}>
              <div className={styles.spotiFyTitle}>
                <PlayYoutube className={styles.spotiFyTitle} />
                <p>Watch on Youtube</p>
              </div>
            </MaskText>
            <ul className={styles.youtubeList}>
              {youtubeArray.map((item, index) => (
                <MaskText stagger={index} key={item.id}>
                  <li className={styles.youtubeItem}>
                    <img
                      src={item.preview}
                      alt={`Youtube Preview ${index + 1}`}
                      className={styles.youtubePreview}
                    />
                    <NavLink to={item.url}>
                      <PlayYoutubeBtn className={styles.playYoutubeBtn} />
                    </NavLink>
                  </li>
                </MaskText>
              ))}
            </ul>
          </div>
        </div>
        <Tours />
        <div className={styles.decorRight}>
          <Star className={styles.decorIcon} />
        </div>
        <div className={styles.decorLeft}>
          <Circle className={styles.decorIconCircle} />
        </div>
      </div>
    </>
  );
}

export default Listen;
