import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../Pages/About/About.module.scss";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.testimonialSlider}>
      <Slider {...settings}>
        <div className={styles.testimonial}>
          <p className={styles.testimonialText}>
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna.&quot;
          </p>
          <p className={styles.testimonialAuthor}>- Name</p>
        </div>
        <div className={styles.testimonial}>
          <p className={styles.testimonialText}>
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna.&quot;
          </p>
          <p className={styles.testimonialAuthor}>- Name</p>
        </div>
        <div className={styles.testimonial}>
          <p className={styles.testimonialText}>
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna.&quot;
          </p>
          <p className={styles.testimonialAuthor}>- Name</p>
        </div>
        <div className={styles.testimonial}>
          <p className={styles.testimonialText}>
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna.&quot;
          </p>
          <p className={styles.testimonialAuthor}>- Name</p>
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
