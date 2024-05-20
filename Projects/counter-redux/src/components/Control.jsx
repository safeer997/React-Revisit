import { useRef } from "react";
import { useDispatch } from "react-redux";
import { privacySliceActions, sliceActions } from "../store";

const Control = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(sliceActions.increment());
  };

  const handleSubstract = () => {
    dispatch(sliceActions.decrement());
  };

  const handlePrivacy = () => {
   dispatch(privacySliceActions.toggle())
  };

  const inputElement = useRef();

  const handleInput = () => {
    const number = Number(inputElement.current.value);
    dispatch(sliceActions.add_input(number));
    inputElement.current.value = null;
  };

  return (
    <div>
      <button onClick={handleAdd} type="button" className="btn btn-primary">
        Add
      </button>

      <button
        onClick={handleSubstract}
        type="button"
        className="btn btn-success"
      >
        Substract
      </button>

      <button onClick={handlePrivacy} type="button" className="btn btn-success">
        Privacy toggle
      </button>
      <br />
      <input type="text" ref={inputElement} />
      <button onClick={handleInput} type="button" className="btn btn-success">
        Add Number
      </button>
    </div>
  );
};

export default Control;
