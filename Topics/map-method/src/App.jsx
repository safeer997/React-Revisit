import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodList from "./components/FoodList";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let healthyFoods = [
    "Green Vegetables",
    "Protein rich food",
    "Fiber rich food",
    "Sea food",
    "carbs",
  ];

  //  let healthyFoods = [];

  return (
    <>
      <Container>
        <h1 className="healthyfood">Healthy Foods</h1>
        {healthyFoods.length === 0 && <h3>List is empty !</h3>}
        <FoodInput></FoodInput>
        <FoodList item={healthyFoods}></FoodList>
        {/* passing array as a prop */}
      </Container>
      {/* <Container><p>Above is the list of healthy foods .</p></Container> */}
     
    </>
  );
}

export default App;
