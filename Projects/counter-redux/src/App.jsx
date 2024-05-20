import "./App.css"; // Import the main CSS file for the app
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS for styling
import Counter from "./components/Counter"; // Import the Counter component
import Heading from "./components/Heading"; // Import the Heading component
import Control from "./components/Control"; // Import the Control component
import { useSelector } from "react-redux"; // Import the useSelector hook from react-redux
import PrivacyMsg from "./components/PrivacyMsg"; // Import the PrivacyMsg component

function App() {
  // Use useSelector hook to access the privacy state from the Redux store
  const privacy = useSelector((store) => store.privacy);

  return (
    <>
      <center>
        {/* Render the Heading component */}
        <Heading />
        {/* Conditionally render PrivacyMsg or Counter component based on the privacy state */}
        {privacy ? <PrivacyMsg /> : <Counter />}
        {/* Render the Control component */}
        <Control />
      </center>
    </>
  );
}

export default App; // Export the App component as the default export
