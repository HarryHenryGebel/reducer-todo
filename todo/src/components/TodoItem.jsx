import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function TodoItem(props) {
  const {item, toggleCompleted} = props,
        // change color when completed
        color = item.completed ?
        "secondary" :
        "primary";

  return (
    <ListItem button onClick={() => toggleCompleted()}>
          <ListItemText primary={item.item}
                        primaryTypographyProps={{color: color}}/>
        </ListItem>
  );
}

//  LocalWords:  ListItem ListItemText
