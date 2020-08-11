import Todo from "../class/Todo";

export const initialState = [];

export function todoReducer (state, action) {
  switch(action.type) {
  case "create":
    return [...state, new Todo(action.payload)];
  case "delete":
    return state.filter((item) => item.id !== action.payload);
  case "toggle":
    return state.map((item) => item.id !== action.payload ?
                     item :
                     {...item, completed: !item.completed});
  default:
    throw Error(`Unknown action type "${action.type}"`);
  }
}
