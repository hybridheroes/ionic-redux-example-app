export const addNote = (note: string) => ({
  type: 'ADD_NOTE',
  payload: note
})

export const addReminder = (noteId: string, time: string) => ({
  type: 'ADD_REMINDER',
  payload: {noteId, time}
})
