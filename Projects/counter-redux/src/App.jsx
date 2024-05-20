import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Control from "./components/Control";
import { useSelector } from "react-redux";
import PrivacyMsg from "./components/PrivacyMsg";

function App() {
  const privacy = useSelector((store) => store.privacy);

  return (
    <>
      <center>
        <Heading></Heading>
        {privacy ? <PrivacyMsg /> : <Counter />}
        <Control></Control>
      </center>
    </>
  );
}

export default App;
