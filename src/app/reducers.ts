import { AppState } from "./app.module";
import { Reducer } from "redux";

export const stateReducer = (state: boolean, action) => {
  switch(action.type) {
    case 'TO_FALSE':
      return false;

    default:
      return state;
  }
}

export const rootReducer: Reducer<AppState> = (state: AppState, action) => ({
  state: stateReducer(state.state, action)
})
