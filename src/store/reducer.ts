import { createStore } from "redux";
import { PICKLES, HOTDOG } from "./actions";

interface actionShape {
  type: string;
  payload: string;
}

function courses(state = { payload: "Tomate" }, action: actionShape) {
  switch (action.type) {
    case PICKLES:
      return { ...state, payload: action.payload };
    case HOTDOG:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;
