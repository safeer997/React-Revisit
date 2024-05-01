import styles from "./FoodInput.module.css"
const FoodInput =()=>{
  const handleOnChange = (event)=>{
    console.log(event.target.value);
  }
  return <input onChange={handleOnChange} className={styles.foodinput} type="text" placeholder="Enter anything else to buy"></input>
}
export default FoodInput;