import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./bloghomeswiper.module.css";
type Props = {};

const BlogHomeSwiper: React.FC = (props: Props) => {
  const [swipe, setSwipe] = useState<any>();
  return (
    <div className={styles.BlogHomeSwiper}>
      <p className={styles.BlogHomeSwiper__title}>
        Explore our add-ons for
        <br />
        <span className={styles.BlogHomeSwiper__title__span}>
          better conversion
        </span>
      </p>
      <div className={styles.BlogHomeSwiper__container}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          loopFillGroupWithBlank={true}
          className={styles.mySwiper}
          onBeforeInit={(swipper) => setSwipe(swipper)}
        >
          <SwiperSlide>
            <div className={styles.BlogHomeSwiper__container__slide}>
              <img
                src="./Tool_visual-02.png"
                alt=""
                className={styles.BlogHomeSwiper__container__slide__img}
              />
              <p className={styles.BlogHomeSwiper__container__slide__p}>
                XO Gallery
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.BlogHomeSwiper__container__slide}>
              <img
                src="./Tool_visual-03.png"
                alt=""
                className={styles.BlogHomeSwiper__container__slide__img}
              />

              <p className={styles.BlogHomeSwiper__container__slide__p}>
                XO Gallery
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.BlogHomeSwiper__container__slide}>
              <img
                src="./Tool_visual-04.png"
                alt=""
                className={styles.BlogHomeSwiper__container__slide__img}
              />
              <p className={styles.BlogHomeSwiper__container__slide__p}>
                XO Gallery
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.BlogHomeSwiper__container__slide}>
              <img
                src="./Tool_visual-04.png"
                alt=""
                className={styles.BlogHomeSwiper__container__slide__img}
              />
              <p className={styles.BlogHomeSwiper__container__slide__p}>
                XO Gallery
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div
          onClick={() => swipe?.slidePrev()}
          className={styles.swiper__button__left}
        >
          <img src="./PathCopy2.png" alt="" />
        </div>
        <div
          onClick={() => swipe?.slideNext()}
          className={styles.swiper__button__right}
        >
          <img src="./PathCopy2.png" alt="" />
        </div>

        {/* For Phone width < 500px */}
        <div className={styles.BlogHomeSwiper__container__phone}>
          <div className={styles.BlogHomeSwiper__container__slide}>
            <img
              src="./Tool_visual-02.png"
              alt=""
              className={styles.BlogHomeSwiper__container__slide__img}
            />
            <p className={styles.BlogHomeSwiper__container__slide__p}>
              XO Gallery
            </p>
          </div>
          <div className={styles.BlogHomeSwiper__container__slide}>
            <img
              src="./Tool_visual-03.png"
              alt=""
              className={styles.BlogHomeSwiper__container__slide__img}
            />
            <p className={styles.BlogHomeSwiper__container__slide__p}>
              XO Gallery
            </p>
          </div>
          <div className={styles.BlogHomeSwiper__container__slide}>
            <img
              src="./Tool_visual-04.png"
              alt=""
              className={styles.BlogHomeSwiper__container__slide__img}
            />
            <p className={styles.BlogHomeSwiper__container__slide__p}>
              XO Gallery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHomeSwiper;
