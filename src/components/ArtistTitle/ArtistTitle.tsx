import styles from "./artisttile.module.css";

type Props = {};

function ArtistTitle({}: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>DISCOVER ARTISTS</h1>
      <p className={styles.subTitle}>
        Find the perfect talent for your next event
      </p>
    </div>
  );
}

export default ArtistTitle;
