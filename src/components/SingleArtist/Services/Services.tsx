import { useState } from "react";
import clsx from "clsx";
import { useDirection } from "../../../context/DirectionContext";
// Components
import { MaskText } from "../../AnimatedText/MaskText";
import Title from "../Title/Title";
import Button from "../../Button/Button";
import CustomModal from "../../CustomModal/CustomModal";
import PopupBooking from "../../Popups/PopupBooking";
// Utils
import { SERVICES } from "../../../utils/constants";
// Images
import DecorStar from "../../../assets/icons/decor-star.svg?react";
// Styles
import styles from "./services.module.css";

export default function Services() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const { direction } = useDirection();

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <>
      <div className={styles.container}>
        <MaskText>
          <Title>Services</Title>
        </MaskText>
        <ul className={styles.list}>
          {SERVICES.map((step, index) => (
            <MaskText stagger={index} key={step.id}>
              <li className={styles.item}>
                <div className={styles.iconContainer}>
                  <DecorStar className={styles.icon} />
                  <span className={styles.index}>{index + 1}</span>
                </div>
                <p
                  className={clsx(
                    styles.stepDescription,
                    direction === "rtl" && styles.rtl
                  )}
                >
                  {step.text}
                </p>
              </li>
            </MaskText>
          ))}
        </ul>
        <Button text="Book now" className="artistPage" onClick={togglePopup} />
      </div>
      <CustomModal open={isPopupOpen} onClose={togglePopup}>
        <PopupBooking onClose={togglePopup} />
      </CustomModal>
    </>
  );
}
