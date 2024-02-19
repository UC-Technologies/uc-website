import React, { useState } from "react";
import styles from "./about.module.scss";
import TestimonialSlider from "../../Components/Sliider";
import Navbar from "../../Components/Shared/Navbar/Navbar";

const About = () => {
  const [showTestimonials, setShowTestimonials] = useState(false);

  return (
    <main>
      <Navbar />

      <div className={styles.mainContainer}>
        <div className={styles.header}>ABOUT US</div>
        <div className={styles.content}>
          {/* <div className={styles.header}>ABOUT US</div> */}
          <div className={styles.title}>
            WHAT is U<span>C</span>?
          </div>
          <div className={styles.paragraph}>
            At UC, we are more than just a startup - we are a passionate team dedicated to
            transforming ideas into digital realities. Specialising in E-commerce
            websites, UI/UX prototypes, business websites, booking platforms, and
            portfolios, we blend creativity with technology to craft online experiences
            that leave a lasting impression.
          </div>
          <div className={styles.subHeader}>
            WHY U<span>C</span>?
          </div>
          <div className={styles.paragraph}>
            Our approach is rooted in staying ahead of technology trends, ensuring your
            project benefits from the latest advancements. We believe in the power of
            collaboration - your ideas are at the core of our projects, and we work hand
            in hand to bring them to life. From concept to execution, we are dedicated to
            achieving excellence in every detail. Choose UC for a partnership that goes
            beyond development; choose us for a journey where creativity meets technology
            to create something extraordinary.
          </div>
        </div>
        {/* <div className={styles.testimonialsSection1}> */}
        {showTestimonials && (
          <div className={styles.testimonialsSection1}>
            <section className={styles.testimonialsSection}>
              <div className={styles.Testi}>Testimonials</div>
              <TestimonialSlider />
            </section>
          </div>
        )}
        <div className={styles.viewLessButton}>
          <button onClick={() => setShowTestimonials(!showTestimonials)}>
            {showTestimonials ? "view less" : "view more"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default About;
