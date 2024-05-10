import { useState } from "react";
import { MdOutlineNoteAdd } from "react-icons/md";

function AddTodo({ handleNewItems }) {
  const [todoName, setTodoName] = useState("");
  const [duedate, setDuedate] = useState("");

  const handleOnNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleOnDateChange = (event) => {
    setDuedate(event.target.value);
  };

  const handleAddButtonclicked = (event) => {
    
    event.preventDefault();
    // console.log(event);
    handleNewItems(todoName, duedate); 
    setTodoName("");
    setDuedate("");
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleAddButtonclicked}>
        <div className="row safeer-row">
          <div className="col-6">
            <input
              type="text"
              value={todoName}
              placeholder="Enter todo here!"
              onChange={handleOnNameChange} 
            />
          </div>
          <div className="col-4">
            <input value={duedate} type="date" onChange={handleOnDateChange} />
          </div>
          <div className="col-2">
            <button
              type="submit"
              onSubmit={handleAddButtonclicked}
              className="btn btn-success safeer-button"
            >
              {/* Add */}
              <MdOutlineNoteAdd />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
