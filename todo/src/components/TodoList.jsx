import React from "react";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import List from '@material-ui/core/List';

import TodoItem from "./TodoItem";

export default function TodoList (props) {
  const {todoList, todoDispatcher} = props;

  function hasCompletedItems () {
    // return true as soon as one completed item is found
    for (let item of todoList)
      if (item.completed)
        return true;

    return false;
  }

  return (
    <>
      <List>
        {todoList.map(item => (
          <TodoItem key={item.id}
                    item={item}
                    toggleCompleted={() => todoDispatcher(
                      {type: "TOGGLE", payload: item.id})}/>
        ))}
      </List>
      <Box m={1} component="span">
        <Button variant="contained"
                disabled={!hasCompletedItems()}
                onClick={() => todoDispatcher({type: "CLEAR"})}
                startIcon={<HighlightOffIcon/>}>
          Clear completed items
        </Button>
      </Box>
    </>
  );
}

//  LocalWords:  HighlightOff TodoItem
