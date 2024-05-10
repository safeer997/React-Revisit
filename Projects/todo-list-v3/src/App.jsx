import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitem1 from "./components/Todoitems";

import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handlenewItems = (itemName, itemDueDate) => {
    // console.log(`item name :${itemName} Date:${itemDueDate}` );
    const newtodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    setTodoItems(newtodoItems);
  };

  const handleDeleteItem = (todoItem) => {
    const newtodoItems = todoItems.filter((item) => item.name !== todoItem);
    setTodoItems(newtodoItems);
  };

  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo handleNewItems={handlenewItems}></AddTodo>
        {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
        <div className="items-container">
          <Todoitem1
            handleDeleteItem={handleDeleteItem}
            passasArray={todoItems}
          ></Todoitem1>
        </div>
      </center>
    </>
  );
}

export default App;
