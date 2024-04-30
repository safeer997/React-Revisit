import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodList from "./components/FoodList";

function App() {
  let healthyFoods = [
    "Green Vegetables",
    "Protein rich food",
    "Fiber rich food",
    "Sea food",
    "carbs"
  ];

  

  // let healthyFoods = [];

  return (
    <>
      <center>
        <h1>Healthy Foods</h1>
        {healthyFoods.length === 0 && <h3>List is empty !</h3>}
        <FoodList item={healthyFoods} ></FoodList>
         {/* passing array as a prop */}
      </center>
    </>
  );
}

export default App;
