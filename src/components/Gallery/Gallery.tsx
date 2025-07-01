import { MaskText } from "../AnimatedText/MaskText";
import Title from "../SingleArtist/Title/Title";
import Slider from "../Slider/Slider";
import styles from "./gallery.module.css";
import galleriImg1 from "../../assets/images/gallery/1.png";
import galleriImg2 from "../../assets/images/gallery/2.png";
import galleriImg3 from "../../assets/images/gallery/3.png";

type Props = {};

function Gallery({}: Props) {
  const galleryList = [
    galleriImg1,
    galleriImg2,
    galleriImg3,
    galleriImg1,
    galleriImg2,
    galleriImg3,
  ];

  return (
    <div className={styles.container}>
      <MaskText>
        <Title>Gallery</Title>
      </MaskText>
      <Slider galleryList={galleryList} />
    </div>
  );
}

export default Gallery;
