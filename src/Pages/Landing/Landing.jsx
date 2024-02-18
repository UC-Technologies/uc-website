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
            <span className={styles.red_text}>faster</span> <br />
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
    </div>
  );
};

export default Landing;
