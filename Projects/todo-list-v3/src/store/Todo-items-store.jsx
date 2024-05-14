import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  handleDeleteItem: () => {},
  handleNewItems: () => {},
});

//some default object passed so that we get autocomplete in ide

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


const TodoItemsContextProvider = ({children}) => {
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
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        handleDeleteItem,
        handleNewItems,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
