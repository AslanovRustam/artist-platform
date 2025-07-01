import type { ReactNode } from "react";
import Modal from "react-responsive-modal";
import styles from "./custommodal.module.css";
import "react-responsive-modal/styles.css";

type Props = { children: ReactNode; open: boolean; onClose: () => void };

function CustomModal({ children, open, onClose }: Props) {
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
    <Modal
      open={open}
      onClose={onClose}
      center
      classNames={{
        modal: styles.modalContainer,
        overlay: styles.customOverlay,
        closeIcon: styles.customCloseButton,
      }}
      closeIcon={closeIcon}
    >
      {children}
    </Modal>
  );
}

export default CustomModal;
