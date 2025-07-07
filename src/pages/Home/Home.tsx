import { useEffect } from "react";
import Booking from "../../components/Booking/Booking";
import BookingGreen from "../../components/Booking/BookingGreen";
import Brief from "../../components/Brief/Brief";
import Devider from "../../components/Devider/Devider";
import DeviderAnimated from "../../components/Devider/DeviderAnimated";
import Hero from "../../components/Hero/Hero";
import Missions from "../../components/Missions/Missions";
import SoundWaves from "../../components/SoundWaves/SoundWaves";
import Talents from "../../components/Talents/Talents";
import styles from "./home.module.css";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className={styles.section}>
      <Hero />
      <Devider variant="default" />
      <Brief />
      <SoundWaves />
      <Talents />
      <DeviderAnimated className="logo" />
      <Missions />
      <Devider variant="default" />
      <Booking />
      <BookingGreen />
    </section>
  );
}
