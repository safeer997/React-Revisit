import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitem1 from "./components/Todoitems";

import "./App.css";

function App() {
  const todoitems = [
    {
      name: "Learn react",
      dueDate: "24/12/24",
    },
    {
      name: "Make Projects",
      dueDate: "01/01/25",
    },
    {
      name: "Make Projects with MERN",
      dueDate: "15/01/25",
    }
  ];
  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <div className="items-container">
          <Todoitem1 passasArray={todoitems}></Todoitem1>
        </div>
      </center>
    </>
  );
}

export default App;
