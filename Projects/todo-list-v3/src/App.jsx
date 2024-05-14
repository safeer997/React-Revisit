import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitem1 from "./components/Todoitems";
import "./App.css";
import {  useReducer } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import { TodoItemsContext } from "./store/Todo-items-store";
import TodoItemsContextProvider from "./store/Todo-items-store";


function App() {
  // const [todoItems, setTodoItems] = useState([]);

  

  return (
    <>
     <TodoItemsContextProvider>

     <center className="todo-container">
          <AppName></AppName>
          <AddTodo></AddTodo>
          <WelcomeMsg></WelcomeMsg>
          <div className="items-container">
            <Todoitem1></Todoitem1>
          </div>
        </center>
      </TodoItemsContextProvider>
   
       
    </>
  );
}

export default App;
