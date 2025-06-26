// Images
import DecorStar from "../../assets/icons/decor-star.svg?react";
// Utils
import { ANCHORS, BOOKING } from "../../utils/constants";
import { MaskText } from "../AnimatedText/MaskText";
// Styles
import styles from "./booking.module.css";

function Booking() {
  return (
    <div className={styles.container} id={ANCHORS.howItWorks.id}>
      <div className={styles.wrapper}>
        <MaskText stagger={1}>
          <h2 className={styles.title}>
            <span className={styles.titleGreen}>Booking </span>
            shouldn't take 27 emails
          </h2>
        </MaskText>
        <MaskText stagger={2}>
          <p className={styles.subTitle}>
            We've taken everything you hate about booking, the back-and-forth,
            the confusion, the endless emails, and made it simple.
          </p>
        </MaskText>

        <ul className={styles.list}>
          {BOOKING.map((step, index) => (
            <MaskText stagger={index} key={step.id}>
              <li className={styles.item}>
                <div className={styles.iconContainer}>
                  <DecorStar className={styles.icon} />
                  <span className={styles.index}>{index + 1}</span>
                </div>
                <p className={styles.stepTitle}>{step.title}</p>
                <p className={styles.stepDescription}>{step.description}</p>
              </li>
            </MaskText>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Booking;
