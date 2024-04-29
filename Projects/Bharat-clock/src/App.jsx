import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/CLockSlogan";
import CurrentTime from "./components/CurrentTIme";
import "./App.css";


function App() {
  return (
    <>
      <center>
        <ClockHeading></ClockHeading>
        <ClockSlogan></ClockSlogan>
        <CurrentTime></CurrentTime>
      </center>
    </>
  );
}

export default App;
