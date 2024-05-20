import { useRef } from "react"; // Import useRef hook from React
import { useDispatch } from "react-redux"; // Import useDispatch hook from react-redux
import { privacySliceActions, sliceActions } from "../store"; // Import action creators from the store

const Control = () => {
  const dispatch = useDispatch(); // Initialize dispatch function to dispatch actions

  // Handler for incrementing the counter
  const handleAdd = () => {
    dispatch(sliceActions.increment()); // Dispatch the increment action
  };

  // Handler for decrementing the counter
  const handleSubstract = () => {
    dispatch(sliceActions.decrement()); // Dispatch the decrement action
  };

  // Handler for toggling privacy state
  const handlePrivacy = () => {
    dispatch(privacySliceActions.toggle()); // Dispatch the toggle action for privacy
  };

  const inputElement = useRef(); // Initialize a ref to access the input element

  // Handler for adding a specific number to the counter
  const handleInput = () => {
    const number = Number(inputElement.current.value); // Get the value from the input and convert it to a number
    dispatch(sliceActions.add_input(number)); // Dispatch the add_input action with the number as payload
    inputElement.current.value = null; // Clear the input field
  };

  return (
    <div>
      {/* Button to increment the counter */}
      <button onClick={handleAdd} type="button" className="btn btn-primary">
        Add
      </button>

      {/* Button to decrement the counter */}
      <button
        onClick={handleSubstract}
        type="button"
        className="btn btn-success"
      >
        Subtract
      </button>

      {/* Button to toggle privacy state */}
      <button onClick={handlePrivacy} type="button" className="btn btn-success">
        Privacy toggle
      </button>
      <br />
      {/* Input field to enter a number */}
      <input type="text" ref={inputElement} />
      {/* Button to add the entered number to the counter */}
      <button onClick={handleInput} type="button" className="btn btn-success">
        Add Number
      </button>
    </div>
  );
};

export default Control; // Export the Control component as the default export
