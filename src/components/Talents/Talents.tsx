import { NavLink } from "react-router";
// Components
import ButtonWithIcon from "../Button/ButtonWithIcon";
import Button from "../Button/Button";
// Images
import Star from "../../assets/icons/star.svg?react";
// Utils
import { ANCHORS, ARTISTS, ROUTES } from "../../utils/constants";
// Styles
import styles from "./talents.module.css";
import { MaskText } from "../AnimatedText/MaskText";

function Talents() {
  return (
    <div className={styles.container} id={ANCHORS.artists.id}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          <MaskText stagger={1}>
            Curated
            <span className={styles.titleGreen}> talent</span>
            <br></br> Zero conpromises
          </MaskText>
        </h2>
        <p className={styles.subTitle}>
          <MaskText stagger={2}>
            Only the best make it to Amp. Here are a few of our most booked
            acts:
          </MaskText>
        </p>
        <ul className={styles.list}>
          {ARTISTS.map((artist, index) => (
            <li className={styles.item} key={artist.id}>
              <MaskText stagger={index}>
                <div className={styles.imageWrapper}>
                  <img
                    src={artist.photo}
                    alt={artist.name}
                    className={styles.photo}
                  />
                </div>
                <NavLink
                  to={`${ROUTES.artists}/${artist.id}`}
                  className={styles.navLink}
                >
                  <Button text="See more details" className="artists" />
                </NavLink>
              </MaskText>
            </li>
          ))}
        </ul>
        <ButtonWithIcon text="view all artists" href={ROUTES.artists} />
        <Star className={styles.decorLeft} />
        <Star className={styles.decorRight} />
      </div>
    </div>
  );
}

export default Talents;
