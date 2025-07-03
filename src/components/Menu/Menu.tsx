import { useState } from "react";
import clsx from "clsx";
// Components
import Button from "../Button/Button";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import Modal from "../Modal/Modal";
import Navpanel from "../NavPanels/Navpanel";
import CustomModal from "../CustomModal/CustomModal";
import PopupProfile from "../Popups/PopupProfile";
//Styles
import styles from "./menu.module.css";

type Props = {};

export default function Menu({}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSignupOpen, setIsSignupOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const toggleSignup = () => setIsSignupOpen((prev) => !prev);

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <LangSwitcher />
        <Button text="SIGN UP" onClick={toggleSignup} />
      </div>

      <div className={styles.burgerContainer}>
        <button
          className={styles.burger}
          aria-label="Open menu"
          onClick={toggleMenu}
        >
          <div className={clsx(styles.burgerLine, isOpen && styles.topOpen)} />
          <div
            className={clsx(styles.burgerLine, isOpen && styles.middleOpen)}
          />
          <div
            className={clsx(styles.burgerLine, isOpen && styles.bottomOpen)}
          />
        </button>
      </div>

      <Modal
        onClose={toggleMenu}
        showModal={isOpen}
        className="pt-86"
        key="menu"
      >
        <div className={styles.modalContent}>
          <Navpanel />
          <div className={styles.buttonContainerMobile}>
            <LangSwitcher />
            <Button
              text="SIGN UP"
              fullWidth
              className="menu"
              onClick={toggleSignup}
            />
          </div>
        </div>
      </Modal>
      <CustomModal open={isSignupOpen} onClose={toggleSignup}>
        <PopupProfile onClose={toggleSignup} />
      </CustomModal>
    </div>
  );
}
