import React from "react";
import Card from '@material-ui/core/Card';
import "fontsource-roboto";

import "TodoList" from "./components/TodoList";

function App() {
  return (
    <Card variant="outlined">
      <TodoList/>
    </Card>
  );
}

export default App;
