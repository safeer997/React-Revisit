import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitem1 from "./components/Todoitem1";
import Todoitem2 from "./components/Todoitem2";
import "./App.css";

function App() {
  return (
    <>
      <center class="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <div class="items-container">
        <Todoitem1></Todoitem1>
        <Todoitem2></Todoitem2>
        </div>
       
      </center>
    </>
  );
}

export default App;
