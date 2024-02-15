import styles from "./CardService.module.scss";

const CardService = ({ img = "src/assets/react.svg", text = "sample" }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.front}>
          <img src={img} alt={text} />
        </div>
        <div className={styles.back}>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default CardService;
