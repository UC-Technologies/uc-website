import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.logo}>
        <img
          src="https://res.cloudinary.com/dvra8rj4n/image/upload/v1708232175/UC/er24mbnzh2mr7arkp37u.svg"
          alt="UC LOGO"
        />
      </div>
      <div className={styles.hero}>
        <div className={styles.hero_text}>
          <p className={styles.first}>
            Empowering vision, <br /> creating digital <br /> masterpieces{" "}
            <span className={styles.animatedtext}>
              <span className={styles.red_text}>faster</span>
              {/* <span className={styles.red_text}>with ease</span>
              <span className={styles.red_text}>efficiently</span> */}
            </span>
            <br />
            <p className={styles.second}>
              Embark upon a Digital Odyssey with UC- your <br /> premier creative
              alley,where we guide you, <br /> consult and transform your concepts into{" "}
              <br />
              captivating websites, where skills meet <br /> impeccable design, one pixel
              at a time.
            </p>
          </p>
        </div>
        <div className={styles.hero_image}>
          <img
            src="https://res.cloudinary.com/dvra8rj4n/image/upload/v1708232378/UC/u8zjxnsqyilzd08idqnb.svg"
            alt="UC LOGO"
          />
        </div>
      </div>
      <button>
        GET <br /> STARTED
      </button>
      <div className={styles.box}>
        <div className={styles.ellipse}></div>
      </div>
      <div className={styles.box2}>
        <div className={styles.ellipse2}></div>
      </div>
      <div className={styles.box3}>
        <div className={styles.ellipse3}></div>
      </div>
      <div className={styles.box4}>
        <div className={styles.ellipse4}></div>
      </div>
    </div>
  );
};

export default Landing;
