import Button from "../../Button/Button";
import Title from "../Title/Title";
// Utils
import { TOURS } from "../../../utils/constants";
// Styles
import styles from "./tours.module.css";
import { useState } from "react";
import CustomModal from "../../CustomModal/CustomModal";
import PopupBooking from "../../Popups/PopupBooking";
import { MaskText } from "../../AnimatedText/MaskText";

function Tours() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <>
      <div className={styles.container}>
        <MaskText stagger={0.1}>
          <Title>Upcoming tour dates</Title>
        </MaskText>
        <ul className={styles.list}>
          {TOURS.map((tour, index) => (
            <MaskText stagger={index} key={tour.id}>
              <li className={styles.item}>
                <img
                  src={tour.photo}
                  alt={tour.place}
                  className={styles.image}
                />
                <div className={styles.info}>
                  <p className={styles.place}>{tour.place}</p>
                  <p className={styles.date}>{tour.date}</p>
                  <p className={styles.location}>{tour.location}</p>
                </div>
                <Button
                  text="Book now"
                  className="tours"
                  onClick={togglePopup}
                />
              </li>
            </MaskText>
          ))}
        </ul>
      </div>
      <CustomModal open={isPopupOpen} onClose={togglePopup}>
        <PopupBooking onClose={togglePopup} />
      </CustomModal>
    </>
  );
}

export default Tours;
