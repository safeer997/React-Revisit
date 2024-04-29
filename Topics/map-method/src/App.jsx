import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // let healthyFoods = [
  //   "Green Vegetables",
  //   "Protein rich food",
  //   "Fiber rich food",
  //   "Sea food",
  // ];

  let healthyFoods = [];

  if(healthyFoods.length===0){
    return  <center><h3>No food items to display</h3></center>
  }

  return (
    <>
      <center>
        <h1>Healthy Foods</h1>
        {healthyFoods.length===0 &&  <center><h3>No food items to display</h3></center>}
        <ol className="list-group list-group-numbered">
          {healthyFoods.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ol>
      </center>
    </>
  );
}

export default App;
