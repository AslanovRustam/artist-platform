import { useLocation, useNavigate } from "react-router";
import { ANCHORS } from "../../utils/constants";
import styles from "./navpanel.module.css";

type Props = {};

function Navpanel({}: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (hash: string) => {
    if (location.pathname === "/") {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/${hash}`);
    }
  };
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button onClick={() => handleAnchorClick(ANCHORS.artists.anchor)}>
            Artists
          </button>
        </li>
        <li className={styles.item}>
          <button onClick={() => handleAnchorClick(ANCHORS.howItWorks.anchor)}>
            How it works
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navpanel;
