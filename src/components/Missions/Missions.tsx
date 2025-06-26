import { useState } from "react";
import { Modal } from "react-responsive-modal";
// Components
import ButtonWithIcon from "../Button/ButtonWithIcon";
import PopupArtistRegistration from "../Popups/PopupArtistRegistration";

// Styles
import styles from "./missions.module.css";
import "react-responsive-modal/styles.css";
import { MaskText } from "../AnimatedText/MaskText";

function Missions() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closeIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_106_1043)">
        <path
          d="M18 6L6 18"
          stroke="#6E7684"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="#6E7684"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_106_1043">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          <MaskText text="Our Mission" stagger={1} />
        </h2>
        <p className={styles.subTitle}>
          <MaskText
            text=" Amp is the revolutionary music artist booking hub connecting top
          talent with venues in one seamless flow."
            stagger={2}
          />
        </p>
        <p className={styles.subTitleGreen}>
          <MaskText stagger={3}>
            Get booked.<br className={styles.mobileDeviderShow}></br> Get seen.
            Get paid.
          </MaskText>
        </p>
        <div className={styles.description}>
          <MaskText stagger={4}>
            We're here to amplify MENA's Talent.
            <br className={styles.mobileDevider} />
            This isn't just about gigs. It's about growth.
            <br className={styles.mobileDevider} />
            We give artists visibility, clarity, and control.
          </MaskText>
        </div>
        <ButtonWithIcon text="Get Started" onClick={togglePopup} />
      </div>
      <div className={styles.decorLeft} />
      <div className={styles.decorRight} />
      <Modal
        open={isPopupOpen}
        onClose={togglePopup}
        center
        classNames={{
          modal: styles.modalContainer,
          overlay: styles.customOverlay,
        }}
        closeIcon={closeIcon}
      >
        <PopupArtistRegistration onClose={togglePopup} />
      </Modal>
    </div>
  );
}

export default Missions;
