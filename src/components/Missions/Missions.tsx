import { useState } from "react";
// Components
import ButtonWithIcon from "../Button/ButtonWithIcon";
import PopupArtistRegistration from "../Popups/PopupArtistRegistration";
import CustomModal from "../CustomModal/CustomModal";
import { MaskText } from "../AnimatedText/MaskText";
// import Magnetic from "../Magnetic/Magnetic";
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
        {/* <Magnetic> */}
        <ButtonWithIcon text="Get Started" onClick={togglePopup} />
        {/* </Magnetic> */}
      </div>
      <div className={styles.decorLeft} />
      <div className={styles.decorRight} />

      <CustomModal open={isPopupOpen} onClose={togglePopup}>
        <PopupArtistRegistration onClose={togglePopup} />
      </CustomModal>
    </div>
  );
}

export default Missions;
