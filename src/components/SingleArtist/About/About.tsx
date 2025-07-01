import { MaskText } from "../../AnimatedText/MaskText";
import BouncingBall from "../../BouncingBall/BouncingBall";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.title}>
          <MaskText stagger={0.1}>
            About<br></br>
          </MaskText>
          <MaskText stagger={1}>
            <span className={styles.titleGreen}>the Artist</span>
          </MaskText>
        </p>
        <MaskText stagger={2}>
          <p className={styles.description1}>
            Sarah Johnson is an award-winning jazz vocalist and pianist with
            over 15 years of performance experience. Her smooth, soulful voice
            has captivated audiences across the Middle East and Europe.
          </p>
        </MaskText>
        <MaskText stagger={3}>
          <p className={styles.description2}>
            Sarah specializes in creating intimate musical experiences perfect
            for corporate events, weddings, and private gatherings
          </p>
        </MaskText>
      </div>
      <div className={styles.right}>
        <BouncingBall />
      </div>
    </div>
  );
}
