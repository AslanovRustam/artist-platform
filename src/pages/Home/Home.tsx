import Booking from "../../components/Booking/Booking";
import BookingGreen from "../../components/Booking/BookingGreen";
import Brief from "../../components/Brief/Brief";
import Devider from "../../components/Devider/Devider";
import Hero from "../../components/Hero/Hero";
import Missions from "../../components/Missions/Missions";
import Talents from "../../components/Talents/Talents";
import styles from "./home.module.css";

export default function Home() {
  return (
    <section className={styles.section}>
      <Hero />
      <Devider variant="default" />
      <Brief />
      <Devider variant="purple" />
      <Talents />
      <Devider variant="logo" />
      <Missions />
      <Devider variant="default" />
      <Booking />
      <BookingGreen />
      <Devider variant="purple" visible="mobile" />
    </section>
  );
}
