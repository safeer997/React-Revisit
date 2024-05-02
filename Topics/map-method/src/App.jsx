import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodList from "./components/FoodList";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let healthyFoods = [
  //   "Green Vegetables",
  //   "Protein rich food",
  //   "Fiber rich food",
  //   "Sea food",
  //   "carbs",
  // ];

  let [currentFoodArray, setcurrentFoodArray] = useState([]);
  

  //  let healthyFoods = [];
  const handleOnKeyDown = (event) => {
    // console.log(event);
    if (event.key === "Enter") {
      let newItem = event.target.value;
      event.target.value = '';
       currentFoodArray = [...currentFoodArray,newItem ];
      setcurrentFoodArray(currentFoodArray)
      
      
    }
  };

  return (
    <>
      <Container>
        <h1 className="healthyfood">Healthy Foods</h1>
        
        <FoodInput handleOnKeyDown={handleOnKeyDown}></FoodInput>
        {currentFoodArray.length === 0 && <h3>List is empty !</h3>}

        <FoodList item={currentFoodArray}></FoodList>
        {/* passing array as a prop */}
      </Container>
      {/* <Container><p>Above is the list of healthy foods .</p></Container> */}
    </>
  );
}

export default App;
