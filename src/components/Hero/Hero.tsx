import ButtonWithIcon from "../Button/ButtonWithIcon";
import { MaskText } from "../AnimatedText/MaskText";
// import Magnetic from "../Magnetic/Magnetic";
// Utils
import { ANCHORS } from "../../utils/constants";
// Styles
import styles from "./hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <MaskText stagger={0.1}>
            The <span>Artist-Owned</span> Booking Platform
          </MaskText>
        </div>

        <div className={styles.subTitle}>
          <MaskText stagger={1}>
            Book artists. Drop stress. Raise the volume.
          </MaskText>
        </div>
        <div className={styles.description}>
          <MaskText stagger={1}>
            The region's first all-in-one music artist booking platform.{" "}
            <br></br>
            Built to simplify everystep, from discovery to deal.
          </MaskText>
        </div>
        {/* <Magnetic> */}
        <ButtonWithIcon text="How It Works" href={ANCHORS.booking.anchor} />
        {/* </Magnetic> */}
      </div>
      <div className={styles.decorLeft} />
      <div className={styles.decorRight} />
    </div>
  );
}

export default Hero;
