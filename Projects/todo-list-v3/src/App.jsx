import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitem1 from "./components/Todoitems";
import "./App.css";
import { useState, useReducer } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import { TodoItemsContext } from "./store/Todo-items-store";

const todoItemsReducer = (currentState, action) => {
  let newtodoItems = currentState;

  if (action.type === "NEW_ITEM") {
    newtodoItems = [
      ...currentState,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];
    return newtodoItems;
  } else if (action.type === "DELETE_ITEM") {

    const deletedItem = newtodoItems.filter(
      (item) => item.name !== action.payload.todoItem
    );
    newtodoItems = deletedItem;
    return newtodoItems;
  }
  return newtodoItems;
};

function App() {
  // const [todoItems, setTodoItems] = useState([]);

  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const handleNewItems = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const handleDeleteItem = (todoItem) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoItem,
      },
    };

    dispatchTodoItems(deleteItemAction);

    // const newtodoItems = todoItems.filter((item) => item.name !== todoItem);
    // setTodoItems(newtodoItems);
  };

  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todoItems,
          handleDeleteItem,
          handleNewItems,
        }}
      >
        <center className="todo-container">
          <AppName></AppName>
          <AddTodo></AddTodo>
          <WelcomeMsg></WelcomeMsg>
          <div className="items-container">
            <Todoitem1></Todoitem1>
          </div>
        </center>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
