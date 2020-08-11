import React, {useReducer} from "react";
import Card from '@material-ui/core/Card';
import "fontsource-roboto";

import {initialState, todoReducer} from "./reducers/todoReducer.js";
import "TodoList" from "./components/TodoList";

function App() {
  const [todoList, todoDispatcher] = useReducer(initialState, todoReducer);

  return (
    <Card variant="outlined">
      <TodoList list={todoList}, dispatcher={todoDispatcher}/>
    </Card>
  );
}

export default App;
