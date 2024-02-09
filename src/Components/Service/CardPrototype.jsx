import styles from "./CardPrototype.module.scss";

const CardService = ({ text = "sample", index, active, setActive }) => {
  const changeActive = () => {
    setActive(index);
  };
  return (
    <div
      className={`${styles.container} ${active === index ? styles.expand : null}`}
      onClick={changeActive}
    >
      <div className={`${active === index ? styles.active : null} ${styles.card}`}>
        {text}
      </div>
    </div>
  );
};

export default CardService;
