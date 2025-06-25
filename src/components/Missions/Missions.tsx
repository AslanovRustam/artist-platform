import { useState } from "react";
// Components
import ButtonWithIcon from "../Button/ButtonWithIcon";
// Styles
import styles from "./missions.module.css";

function Missions() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Our Mission</h2>
        <p className={styles.subTitle}>
          Amp is the revolutionary music artist booking hub connecting top
          talent with venues in one seamless flow.
        </p>
        <p className={styles.subTitleGreen}>
          Get booked.<br className={styles.mobileDeviderShow}></br> Get seen.
          Get paid.
        </p>
        <p className={styles.description}>
          We're here to amplify MENA's Talent.
          <br className={styles.mobileDevider}></br> This isn't just about gigs.
          It's about growth. <br className={styles.mobileDevider}></br>We give
          artists visibility, clarity, and control.
        </p>
        <ButtonWithIcon text="Get Started" onClick={togglePopup} />
      </div>
      <div className={styles.decorLeft} />
      <div className={styles.decorRight} />
    </div>
  );
}

export default Missions;
