import { useState } from "react";
import { Modal } from "react-responsive-modal";
// Components
import ButtonWithIcon from "../Button/ButtonWithIcon";
import PopupBooking from "../Popups/PopupBooking";
// Images
import Triangle from "../../assets/icons/decorLeft.svg?react";
// Styles
import styles from "./bookinggreen.module.css";
import "react-responsive-modal/styles.css";

type Props = {};

function BookingGreen({}: Props) {
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
    <>
      <div className={styles.container}>
        <Triangle className={styles.triangleFirst} />
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            It's booking, <br></br>
            <span className={styles.titleBlue}>made better </span>
          </h2>
          <p className={styles.description}>
            First in the region. Built for the culture.
          </p>
          <p className={styles.subTitle}>
            We know the regional music scene inside out, because we live it.
            This platform was built to support the next wave of creativity in
            the Middle East, North Africa and beyond. Fast. Fair. Future-ready.
          </p>
          <ButtonWithIcon
            text="Get Started"
            onClick={togglePopup}
            className="black"
          />
        </div>

        <Triangle className={styles.triangleSecond} />
        <div className={styles.decorStar} />
      </div>

      <Modal
        open={isPopupOpen}
        onClose={togglePopup}
        center
        classNames={{
          modal: styles.modalContainer,
          overlay: styles.customOverlay,
          closeIcon: styles.customCloseButton,
        }}
        closeIcon={closeIcon}
      >
        <PopupBooking onClose={togglePopup} />
      </Modal>
    </>
  );
}

export default BookingGreen;
