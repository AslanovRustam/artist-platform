import Button from "../../Button/Button";
import BubbleTag from "../../BubbleTag/BubbleTag";
import { MaskText } from "../../AnimatedText/MaskText";
// Images
import bg from "../../../assets/images/artists/bg.png";
import DecorStar from "../../../assets/icons/starDecor.svg?react";
// Styles
import styles from "./hero.module.css";

interface Props {
  togglePopup: () => void;
}

const GENRES = [
  { name: "Jazz", color: "#8181D5" },
  { name: "Soul", color: "#2F4ACB" },
  { name: "R&B", color: "#F94819" },
];

function Hero({ togglePopup }: Props) {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.info}>
        <MaskText stagger={0.1}>
          <p className={styles.name}>
            Sarah <br></br>Johnson
          </p>
        </MaskText>
        <MaskText stagger={0.2}>
          <p className={styles.direction}>Soulful jazz vocalist and pianist</p>
        </MaskText>
        <div className={styles.wrapper}>
          <div className={styles.location}>
            <DecorStar className={styles.locationIcon} />
            <span>Dubai, UAE</span>
          </div>

          <ul className={styles.list}>
            {GENRES.map((genre) => (
              <li key={genre.name} className={styles.item}>
                <BubbleTag label={genre.name} color={genre.color} />
              </li>
            ))}
          </ul>
        </div>
        <Button text="Book now" className="artistPage" onClick={togglePopup} />
      </div>
    </div>
  );
}

export default Hero;
