import Booking from "../../components/Booking/Booking";
import BookingGreen from "../../components/Booking/BookingGreen";
import Brief from "../../components/Brief/Brief";
// import Devider from "../../components/Devider/Devider";
import DeviderAnimated from "../../components/Devider/DeviderAnimated";
import Hero from "../../components/Hero/Hero";
import Missions from "../../components/Missions/Missions";
import Talents from "../../components/Talents/Talents";
import styles from "./home.module.css";

export default function Home() {
  return (
    <section className={styles.section}>
      <Hero />
      <DeviderAnimated className="green" speed={20} />
      <Brief />
      <DeviderAnimated className="transparent" direction="right" speed={30} />
      <Talents />
      <DeviderAnimated className="logo" speed={40} />
      <Missions />
      <DeviderAnimated className="green" direction="right" />
      <Booking />
      <BookingGreen />
      <DeviderAnimated className="transparent" speed={50} />
    </section>
  );
}
