import styles from "./FoodItem.module.css";
function FoodItem({ item,handleOnclickBuyButton }) {
  
  return (
    <li className="list-group-item">
      {item}
      <button
        onClick={handleOnclickBuyButton}
        className={`${styles.button} btn btn-info`}
      >
        Buy
      </button>
    </li>
  );
}
export default FoodItem;
