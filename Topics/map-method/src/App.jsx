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

   let TextToShow = "food item entered by user!"

  //  let healthyFoods = [];
  const handleOnChange = (event) => {
    console.log(event.target.value);
    TextToShow=(event.target.value)
  };

 
  return (
    <>
      <Container>
        <h1 className="healthyfood">Healthy Foods</h1>
        {healthyFoods.length === 0 && <h3>List is empty !</h3>}
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{TextToShow}</p>

        <FoodList item={healthyFoods}></FoodList>
        {/* passing array as a prop */}
      </Container>
      {/* <Container><p>Above is the list of healthy foods .</p></Container> */}
    </>
  );
}

export default App;
