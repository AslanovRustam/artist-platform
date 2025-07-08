import { useEffect, useState } from "react";
import DeviderAnimated from "../../components/Devider/DeviderAnimated";
import Gallery from "../../components/Gallery/Gallery";
import About from "../../components/SingleArtist/About/About";
import Experience from "../../components/SingleArtist/Experience/Experience";
import Foloow from "../../components/SingleArtist/Follow/Foloow";
import Hero from "../../components/SingleArtist/Hero/Hero";
import Listen from "../../components/SingleArtist/Listen/Listen";
import ReadyToBook from "../../components/SingleArtist/ReadyToBook/ReadyToBook";
import Services from "../../components/SingleArtist/Services/Services";
import Testimonials from "../../components/SingleArtist/Testimonials/Testimonials";
import SoundWaves from "../../components/SoundWaves/SoundWaves";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import CustomModal from "../../components/CustomModal/CustomModal";
import PopupBooking from "../../components/Popups/PopupBooking";
import styles from "./singleArtist.module.css";

export default function SingleArtistPage() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [showButton, setShowButton] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setShowButton(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.section}>
      <Hero togglePopup={togglePopup} />
      <SoundWaves />
      <About />
      <DeviderAnimated className="logo" />
      <Listen />
      <DeviderAnimated className="logo" />
      <Experience />
      <SoundWaves />
      <Services />
      <SoundWaves green />
      <Gallery />
      <SoundWaves />
      <Testimonials />
      <ReadyToBook />
      <Foloow />
      <FloatingButton onClick={togglePopup} showButton={showButton} />

      <CustomModal open={isPopupOpen} onClose={togglePopup}>
        <PopupBooking onClose={togglePopup} />
      </CustomModal>
    </section>
  );
}
