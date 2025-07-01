import { useEffect } from "react";
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
import styles from "./singleArtist.module.css";

export default function SingleArtistPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className={styles.section}>
      <Hero />
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
    </section>
  );
}
