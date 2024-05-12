import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitem1 from "./components/Todoitems";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import { TodoItemsContext } from "./store/Todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItems = (itemName, itemDueDate) => {
    // console.log(`item name :${itemName} Date:${itemDueDate}` );

    setTodoItems((currentValue) => {
      const newtodoItems = [
        ...currentValue,
        {
          name: itemName,
          dueDate: itemDueDate,
        },
      ];
      return newtodoItems;
    });
  };

  const handleDeleteItem = (todoItem) => {
    const newtodoItems = todoItems.filter((item) => item.name !== todoItem);
    setTodoItems(newtodoItems);
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
