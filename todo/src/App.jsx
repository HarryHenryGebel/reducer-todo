import React, {useReducer} from "react";
import "fontsource-roboto";

import {initialState, todoReducer} from "./reducers/todoReducer.js";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todoList, todoDispatcher] = useReducer(todoReducer, initialState);

  return (
      <div>
        <h1>Gebeldotoo</h1>
        <TodoList todoList={todoList}
                  todoDispatcher={todoDispatcher}/>
        <TodoForm todoDispatcher={todoDispatcher}/>
      </div>
  );
}
