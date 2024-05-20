import { useSelector } from "react-redux"; // Import useSelector hook from react-redux

const Counter = () => {
  // Use useSelector hook to access the counter state from the Redux store
  const counterObj = useSelector((store) => store.counter);
  // Extract the counter value from the counter state object
  const counter = counterObj.counterValue;

  return (
    <div className="col-lg-6 mx-auto"> {/* Use Bootstrap classes for styling */}
      <p className="lead mb-4">The value of counter is: {counter}</p> {/* Display the counter value */}
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        {/* Placeholder for additional content or buttons, using Bootstrap classes for layout */}
      </div>
    </div>
  );
};

export default Counter; // Export the Counter component as the default export
