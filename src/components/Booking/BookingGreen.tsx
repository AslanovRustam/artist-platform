import { useState } from "react";
import { Modal } from "react-responsive-modal";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
// Components
import ButtonWithIcon from "../Button/ButtonWithIcon";
import PopupBooking from "../Popups/PopupBooking";
import { MaskText } from "../AnimatedText/MaskText";
import Magnetic from "../Magnetic/Magnetic";
// Images
// import Triangle from "../../assets/icons/decorLeft.svg?react";
// Styles
import styles from "./bookinggreen.module.css";
import "react-responsive-modal/styles.css";

type Props = {};

function BookingGreen({}: Props) {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const { ref: triangleRef1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  const { ref: triangleRef2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

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
        {/* <Triangle className={styles.triangleFirst} /> */}
        <svg
          viewBox="0 0 295 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(styles.triangleFirst, inView1 && styles.animate)}
          ref={triangleRef1}
        >
          <path
            className={clsx(styles.triangle, styles.triangle1)}
            d="M98.1759 95.0478L6.9062e-06 3.4809e-05L7.62939e-06 191.085L98.1759 95.0478Z"
            fill="currentColor"
          />
          <path
            className={clsx(styles.triangle, styles.triangle2)}
            d="M196.223 95.0478L98.0469 3.4809e-05L98.0469 191.085L196.223 95.0478Z"
            fill="currentColor"
          />
          <path
            className={clsx(styles.triangle, styles.triangle3)}
            d="M294.223 95.0478L196.047 3.4809e-05L196.047 191.085L294.223 95.0478Z"
            fill="currentColor"
          />
        </svg>
        <div className={styles.wrapper}>
          <MaskText stagger={1}>
            <h2 className={styles.title}>
              It's booking, <br></br>
              <span className={styles.titleBlue}>made better </span>
            </h2>
          </MaskText>
          <MaskText stagger={2}>
            <p className={styles.description}>
              First in the region. Built for the culture.
            </p>
          </MaskText>
          <MaskText stagger={2}>
            <p className={styles.subTitle}>
              We know the regional music scene inside out, because we live it.
              This platform was built to support the next wave of creativity in
              the Middle East, North Africa and beyond. Fast. Fair.
              Future-ready.
            </p>
          </MaskText>
          <Magnetic>
            <ButtonWithIcon
              text="Get Started"
              onClick={togglePopup}
              className="black"
            />
          </Magnetic>
        </div>

        {/* <Triangle className={styles.triangleSecond} /> */}
        <svg
          viewBox="0 0 295 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(styles.triangleSecond, inView2 && styles.animate)}
          ref={triangleRef2}
        >
          <path
            className={clsx(styles.triangle, styles.triangle1)}
            d="M98.1759 95.0478L6.9062e-06 3.4809e-05L7.62939e-06 191.085L98.1759 95.0478Z"
            fill="currentColor"
          />
          <path
            className={clsx(styles.triangle, styles.triangle2)}
            d="M196.223 95.0478L98.0469 3.4809e-05L98.0469 191.085L196.223 95.0478Z"
            fill="currentColor"
          />
          <path
            className={clsx(styles.triangle, styles.triangle3)}
            d="M294.223 95.0478L196.047 3.4809e-05L196.047 191.085L294.223 95.0478Z"
            fill="currentColor"
          />
        </svg>
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
