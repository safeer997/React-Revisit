import styles from "./FoodInput.module.css"
const FoodInput =({handleOnChange})=>{

  return <input onChange={handleOnChange} className={styles.foodinput} type="text" placeholder="Enter anything else to buy"></input>
}
export default FoodInput;