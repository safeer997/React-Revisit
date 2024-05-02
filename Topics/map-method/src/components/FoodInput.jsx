import styles from "./FoodInput.module.css"
const FoodInput =({handleOnKeyDown})=>{

  return <input onKeyDown={handleOnKeyDown} className={styles.foodinput} type="text" placeholder="Enter anything else to buy"></input>
}
export default FoodInput;