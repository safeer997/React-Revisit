import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitem1 from "./components/Todoitems";
import "./App.css";
import WelcomeMsg from "./components/WelcomeMsg";
import SeparateBusinessLogic from "./store/Todo-items-store";

function App() {
  return (
    <>
      <SeparateBusinessLogic>
        <center className="todo-container">
          <AppName></AppName>
          <AddTodo></AddTodo>
          <WelcomeMsg></WelcomeMsg>
          <div className="items-container">
            <Todoitem1></Todoitem1>
          </div>
        </center>
      </SeparateBusinessLogic>
    </>
  );
}
export default App;
