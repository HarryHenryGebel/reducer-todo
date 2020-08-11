import TodoData from "../class/TodoData";

const storedState = JSON.parse(window.localStorage.getItem("TodoData"));

// set initialState to stored state, or empty if new
export const initialState = storedState ? storedState : [];

export function todoReducer (state, action) {
  let returnValue;

  switch(action.type.toUpperCase()) {
  case "CLEAR":
    returnValue = state.filter((item) => !item.completed);
    break;
  case "CREATE":
    returnValue = [...state, new TodoData(action.payload)];
    break;
  case "TOGGLE":
    returnValue = state.map((item) => item.id !== action.payload ?
                     item :
                            {...item, completed: !item.completed});
    break;
  default:
    throw Error(`Unknown action type "${action.type}"`);
  }

  window.localStorage.setItem("TodoData", JSON.stringify(returnValue));
  return returnValue;
}

//  LocalWords:  initialState
