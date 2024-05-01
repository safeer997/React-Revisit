import styles from "./FoodItem.module.css";
function FoodItem(props) {
  const handleOnclickBuyButton = (event)=>{
    console.log(event);
    console.log(`${props.item} is being bought !`);
  }
  return (
    <li className="list-group-item">
      {props.item}{" "}
      <button onClick={handleOnclickBuyButton}  className={`${styles.button} btn btn-info`}>Buy</button>
    </li>
  );
}
export default FoodItem;
