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
import Magnetic from "../Magnetic/Magnetic";
import { useRef, type MouseEvent } from "react";

function Talents() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const starRight = useRef<HTMLDivElement>(null);
  const starLeft = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const container = parallaxRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    starRight.current?.setAttribute(
      "style",
      `transform: translate(${x / 30}px, ${
        y / 30
      }px); transition: transform 1s ease-out;`
    );

    starLeft.current?.setAttribute(
      "style",
      `transform: translate(${-x / 20}px, ${
        -y / 40
      }px); transition: transform 1.2s ease-out;`
    );
  };

  const resetTransform = () => {
    starRight.current?.setAttribute(
      "style",
      "transform: translate(0, 0); transition: transform 0.3s ease;"
    );

    starLeft.current?.setAttribute(
      "style",
      "transform: translate(0, 0); transition: transform 0.3s ease;"
    );
  };

  return (
    <div
      className={styles.container}
      id={ANCHORS.artists.id}
      ref={parallaxRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
    >
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
        <Magnetic>
          <ButtonWithIcon text="view all artists" href={ROUTES.artists} />
        </Magnetic>
        <div ref={starLeft} className={styles.decorLeft}>
          <Star className={styles.decorIcon} />
        </div>
        <div ref={starRight} className={styles.decorRight}>
          <Star className={styles.decorIcon} />
        </div>
      </div>
    </div>
  );
}

export default Talents;
