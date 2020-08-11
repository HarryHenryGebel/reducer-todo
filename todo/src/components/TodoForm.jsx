import React, {useState} from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export default function TodoForm (props) {
  const {todoDispatcher} = props,
        [todoText, setTodoText] = useState("");

  return (
    <Card variant="outlined">
      <h2>Add Todo Item:</h2>
      <Box m={1}>
        <TextField fullWidth={true}
                   id="todo-item-field"
                   onChange={event => setTodoText(event.target.value)}
                   value={todoText}
                   variant="filled"
                   label="Todo Item"/>
      </Box>
      <br/>
      <Box m={1} component="span">
        <Button variant="contained"
                disabled={todoText === ""}
                startIcon={<AddCircleIcon/>}
                onClick={() => {
                  todoDispatcher({type: "CREATE", payload: todoText});
                  setTodoText("");
                }}>
          Add Todo Item
        </Button>
      </Box>
    </Card>
  );
}
