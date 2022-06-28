import React from "react";
import styles from "./bloghome.module.css";
type Props = {};

const BlogHome: React.FC = (props: Props) => {
  return (
    <div className={styles.BlogHome}>
      <div className={styles.BlogHome__title}>
        <p className={styles.BlogHome__title__top}>
          We create{" "}
          <span className={styles.BlogHome__title__top__span}>
            Branded eCommerce Experience{" "}
          </span>
          <span>that converts</span>
        </p>
        <p className={styles.BlogHome__title__bot}>
          We champion meaningful brands, products and services by creating an
          intuitive and codeless eCommerce experience that helps you to
          engagingly communicate your brand and build a strong connection with
          your audience.
        </p>
        <button className={styles.BlogHome__title__button}>Explore now</button>
      </div>
      <img
        src={"./Vector.png"}
        alt=""
        className={styles.BlogHome__img__vector}
      />
      <img
        src="./iStock_1180925169 2.png"
        alt=""
        className={styles.BlogHome__img__people}
      />
    </div>
  );
};

export default BlogHome;
