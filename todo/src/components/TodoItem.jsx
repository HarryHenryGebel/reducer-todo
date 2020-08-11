import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function TodoItem(props) {
  const {todoData, toggleCompleted} = props,
        // change color when completed
        color = todoData.completed ?
        "secondary" :
        "primary";

  return (
    <ListItem button onClick={() => toggleCompleted()}>
          <ListItemText primary={todoData.task}
                        primaryTypographyProps={{color: color}}/>
        </ListItem>
  );
}

//  LocalWords:  ListItem ListItemText
