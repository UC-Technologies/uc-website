import styles from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <nav>
      <a href="/">
        <img
          src="https://res.cloudinary.com/dvra8rj4n/image/upload/f_auto,q_auto/uzz9udxyddyqayl7nzfg"
          alt="UC_LOGO"
          className={styles.logo}
        />
      </a>
      <div className={styles.button_wrapper}>
        <button className={styles.btn_active} onClick={null}>
          HOME
        </button>
        <button className={styles.btn_active} onClick={null}>
          SERVICES
        </button>
        <button className={styles.btn_active} onClick={null}>
          PROJECTS
        </button>
        <button className={styles.btn_active} onClick={null}>
          ABOUT US
        </button>
        <button className={styles.contact_btn} onClick={null}>
          CONTACT US
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
