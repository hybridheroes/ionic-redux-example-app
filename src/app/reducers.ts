import { AppState, Notes, Reminder } from "./app.module";
import { Reducer } from "redux";

export const randomId = () => {
  return Math.random().toString(36).slice(2);
}

export const notesReducer: Reducer<Notes> = (state: Notes, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      const id = randomId();
      return {
        byId: {
          ...state.byId,
          [id]: {
            id,
            text: action.payload
          }
        },
        allIds: [...state.allIds, id]
      }

    default:
      return state;
  }
}

export const remindersReducer: Reducer<Reminder[]> = (state: Reminder[], action) => {
  switch (action.type) {
    case 'ADD_REMINDER':
      const id = randomId();
      return [
        ...state,
        {
          id,
          noteId: action.payload.noteId,
          time: action.payload.time
        }
      ]

    default:
      return state;
  }
}

export const rootReducer: Reducer<AppState> = (state: AppState, action) => ({
  notes: notesReducer(state.notes, action),
  reminders: remindersReducer(state.reminders, action)
})
