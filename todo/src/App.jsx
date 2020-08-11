import React, {useReducer} from "react";
import Card from '@material-ui/core/Card';
import "fontsource-roboto";

import {initialState, todoReducer} from "./reducers/todoReducer.js";
import "TodoList" from "./components/TodoList";
import "TodoForm" from "./components/TodoForm";

export default function App() {
  const [todoList, todoDispatcher] = useReducer(initialState, todoReducer);

  return (
      <div>
        <h1>Gebeldotoo</h1>
        <TodoList todoList={todoList}
                  todoDispatcher={todoDispatcher}/>
        <TodoForm todoList={todoList}
                  todoDispatcher={todoDispatcher}/>
      </div>
  );
}
