import { useState } from "react";
// Components
import ButtonWithIcon from "../Button/ButtonWithIcon";
// Images
import Triangle from "../../assets/icons/decorLeft.svg?react";
// Styles
import styles from "./bookinggreen.module.css";
import Modal from "../Modal/Modal";
import PopupBooking from "../Popups/PopupBooking";

type Props = {};

function BookingGreen({}: Props) {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
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
        onClose={togglePopup}
        showModal={isPopupOpen}
        className="bg-blur"
        key="booking"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={styles.modalContent}
        >
          <PopupBooking onClose={togglePopup} />
        </div>
      </Modal>
    </>
  );
}

export default BookingGreen;
