import Todo from "../class/Todo";

export const initialState = [];

export function todoReducer (state, action) {
  switch(action.type.toUpperCase()) {
  case "CLEAR":
    return state.filter((item) => !item.completed);
  case "CREATE":
    return [...state, new Todo(action.payload)];
  case "TOGGLE":
    return state.map((item) => item.id !== action.payload ?
                     item :
                     {...item, completed: !item.completed});
  default:
    throw Error(`Unknown action type "${action.type}"`);
  }
}
