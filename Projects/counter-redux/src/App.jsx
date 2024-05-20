
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Control from "./components/Control";

function App() {
  return (
    <>
      <center>
        <Heading></Heading>
        <Counter></Counter>
        <Control></Control>
      </center>
    </>
  );
}

export default App;
