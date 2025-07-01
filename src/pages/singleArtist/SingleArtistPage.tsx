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
import styles from "./singleArtist.module.css";

export default function SingleArtistPage() {
  return (
    <section className={styles.section}>
      <Hero />
      <DeviderAnimated className="transparent" direction="right" speed={30} />
      <About />
      <DeviderAnimated className="logo" speed={20} />
      <Listen />
      <DeviderAnimated className="logo" speed={60} direction="right" />
      <Experience />
      <DeviderAnimated className="transparent" />
      <Services />
      <DeviderAnimated
        className="transparentGreen"
        direction="right"
        speed={30}
      />
      <Gallery />
      <DeviderAnimated className="transparent" />
      <Testimonials />
      <ReadyToBook />
      <Foloow />
      <DeviderAnimated className="transparent" direction="right" />
    </section>
  );
}
