// Images
import DecorStar from "../../assets/icons/decor-star.svg?react";
// Utils
import { ANCHORS, BOOKING } from "../../utils/constants";
// Styles
import styles from "./booking.module.css";

function Booking() {
  return (
    <div className={styles.container} id={ANCHORS.howItWorks.id}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          <span className={styles.titleGreen}>Booking </span>
          shouldn't take 27 emails
        </h2>
        <p className={styles.subTitle}>
          We've taken everything you hate about booking, the back-and-forth, the
          confusion, the endless emails, and made it simple.
        </p>
        <ul className={styles.list}>
          {BOOKING.map((step, index) => (
            <li className={styles.item} key={step.id}>
              <div className={styles.iconContainer}>
                <DecorStar className={styles.icon} />
                <span className={styles.index}>{index + 1}</span>
              </div>
              <p className={styles.stepTitle}>{step.title}</p>
              <p className={styles.stepDescription}>{step.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Booking;
