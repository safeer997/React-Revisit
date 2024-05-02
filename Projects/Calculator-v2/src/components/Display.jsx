import styles from "./Display.module.css";
const Display = ({ display }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={display}
      readOnly
    ></input>
  );
};
export default Display;
