import { ANCHORS } from "../../utils/constants";
import styles from "./navpanel.module.css";

type Props = {};

function Navpanel({}: Props) {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href={ANCHORS.artists.anchor}>Artists</a>
        </li>
        <li className={styles.item}>
          <a href={ANCHORS.howItWorks.anchor}>How it works</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navpanel;
