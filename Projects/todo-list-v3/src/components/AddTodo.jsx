import { useContext, useRef } from "react";
import { MdOutlineNoteAdd } from "react-icons/md";
import { TodoItemsContext } from "../store/Todo-items-store";

function AddTodo() {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const { handleNewItems } = useContext(TodoItemsContext);

  const handleAddButtonclicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const duedate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    handleNewItems(todoName, duedate);
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleAddButtonclicked}>
        <div className="row safeer-row">
          <div className="col-6">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter todo here!"
            />
          </div>
          <div className="col-4">
            <input type="date" ref={dueDateElement} />
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
