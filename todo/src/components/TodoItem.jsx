import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function TodoItem(props) {
  const {item, todoDispatcher} = props,
        // change color when completed
        color = item.completed ?
        "secondary" :
        "primary";

  return (
    <ListItem button onClick={() => todoDispatcher(
      {type: "TOGGLE", payload: item.id})}>
      <ListItemText primary={item.item}
                    primaryTypographyProps={{color: color}}/>
    </ListItem>
);
}

//  LocalWords:  ListItem ListItemText
