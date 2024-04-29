import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let healthyFoods = [
    "Green Vegetables",
    "Protein rich food",
    "Fiber rich food",
    "Sea food"
  ];
  return (
    <>
      <center>
        <h1>Healthy Foods</h1>
        <ol className="list-group list-group-numbered">
          { healthyFoods.map((item,index)=><li key={index} className="list-group-item">{item}</li>)}
        </ol>
      </center>
    </>
  );
}

export default App;
