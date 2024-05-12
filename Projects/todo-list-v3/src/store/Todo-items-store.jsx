import { createContext } from "react"

export const TodoItemsContext = createContext({
  todoItems:[],
  handleDeleteItem:()=>{},
  handleNewItems:()=>{}
});

//some default object passed so that we get autocomplete in ide