import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo-items-store";

function Todoitems() {


  const ObjFromContext= useContext(TodoItemsContext);
  const todoItems = ObjFromContext.todoItems;
//without destructuring
  const {handleDeleteItem} = useContext(TodoItemsContext)
//using destructuring

  return todoItems.map(({ name, dueDate }, index) => (
    <div key={index} className="container ">
      <div className="row safeer-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{dueDate}</div>
        <div className="col-2">
          <button
            onClick={() => handleDeleteItem(name)}
            type="button"
            className="btn btn-danger safeer-button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ));
}
export default Todoitems;
