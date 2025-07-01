import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import clsx from "clsx";
// Components
import { NavBtnNext, NavBtnPrev } from "./NavButton";
// Styles
import styles from "./slider.module.css";
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  galleryList?: string[];
  testimonials?: { id: number; author: string; client: string; text: string }[];
};

function Slider({ galleryList, testimonials }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className={styles.container}>
      <div className={clsx(styles.navBtn, styles.prev)}>
        <NavBtnPrev swiper={swiperRef} />
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className={styles.slider}
      >
        {galleryList &&
          galleryList.map((item, index) => (
            <SwiperSlide className={styles.sliderItem} key={index}>
              <img
                src={item}
                alt={`gallery image-${index}`}
                className={styles.image}
              />
            </SwiperSlide>
          ))}
        {testimonials &&
          testimonials.map((item, index) => (
            <SwiperSlide className={styles.sliderItem} key={index}>
              <div className={styles.wrapper}>
                <p className={styles.text}>{item.text}</p>
                <p className={styles.author}>{item.author}</p>
                <p className={styles.client}>{item.client}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className={clsx(styles.navBtn, styles.next)}>
        <NavBtnNext swiper={swiperRef} />
      </div>
    </div>
  );
}

export default Slider;
