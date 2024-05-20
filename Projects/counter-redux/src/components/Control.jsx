import   { useRef } from "react";
import { useDispatch } from "react-redux";

const Control = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch({ type: "ADD", payload: {} });
  };

  const handleSubstract = () => {
    dispatch({ type: "SUBSTRACT", payload: {} });
  };

  const handlePrivacy = () => {
    dispatch({ type: "SUBSTRACT", payload: {} });
  };

  const inputElement = useRef();

  const handleInput = () => {
    dispatch({
      type: "INPUT_NUMBER",
      payload: {
        number: Number(inputElement.current.value),
      },
    });
    
    inputElement.current.value=null;
  };

  return (
    <div>
      <button onClick={handleAdd} type="button" className="btn btn-primary">
        Add
      </button>

      <button onClick={handleSubstract} type="button" className="btn btn-success">
        Substarct
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
