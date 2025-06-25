import ButtonWithIcon from "../Button/ButtonWithIcon";
// Utils
import { ANCHORS } from "../../utils/constants";
// Styles
import styles from "./hero.module.css";

type Props = {};

function Hero({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          The <span>Artist-Owned</span> Booking Platform
        </h1>
        <p className={styles.subTitle}>
          Book artists. Drop stress. Raise the volume.
        </p>
        <p className={styles.description}>
          The region's first all-in-one music artist booking platform. <br></br>
          Built to simplify everystep, from discovery to deal.
        </p>
        <ButtonWithIcon text="How It Works" href={ANCHORS.booking.anchor} />
      </div>
      <div className={styles.decorLeft} />
      <div className={styles.decorRight} />
    </div>
  );
}

export default Hero;
