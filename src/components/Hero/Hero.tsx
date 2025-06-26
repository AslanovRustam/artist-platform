import ButtonWithIcon from "../Button/ButtonWithIcon";
import { TitleByWord } from "../AnimatedText/TitleByWord";
import { MaskText } from "../AnimatedText/MaskText";
// Utils
import { ANCHORS } from "../../utils/constants";
// Styles
import styles from "./hero.module.css";

type Props = {};

function Hero({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <MaskText stagger={0.1}>
            The <span>Artist-Owned</span> Booking Platform
          </MaskText>
        </div>

        <div className={styles.subTitle}>
          <TitleByWord text="Book artists. Drop stress. Raise the volume." />
        </div>
        <div className={styles.description}>
          <MaskText stagger={1}>
            The region's first all-in-one music artist booking platform.{" "}
            <br></br>
            Built to simplify everystep, from discovery to deal.
          </MaskText>
        </div>
        <ButtonWithIcon text="How It Works" href={ANCHORS.booking.anchor} />
      </div>
      <div className={styles.decorLeft} />
      <div className={styles.decorRight} />
    </div>
  );
}

export default Hero;
