import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo-items-store";

const WelcomeMsg = () => {
  const ObjFromContext= useContext(TodoItemsContext);
  const todoItems = ObjFromContext.todoItems;


  return  todoItems.length===0 && <div>Have a Great day!</div>;
};
export default WelcomeMsg;
