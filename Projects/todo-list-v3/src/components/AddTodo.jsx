import { useState } from "react";

function AddTodo({ handleNewItems }) {
  const [todoName, setTodoName] = useState();
  const [duedate, setDuedate] = useState();

  const handleOnNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleOnDateChange = (event) => {
    setDuedate(event.target.value);
  };

  const   handleAddButtonclicked = () => {
    handleNewItems(todoName, duedate);
    setTodoName("");
    setDuedate("");
  };

  return (
    <div className="container text-center">
      <div className="row safeer-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here!"
            onChange={handleOnNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleOnDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success safeer-button"
            onClick={handleAddButtonclicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
