import { createSelector } from 'reselect'

export const selectCreateNote = state => state.createNote

export const selectCreateNoteTitle = createSelector(
  [selectCreateNote],
  createNote => createNote.title
)
export const selectCreateNoteDescription = createSelector(
  [selectCreateNote],
  createNote => createNote.description
)
export const selectCreateNoteBackground = createSelector(
  [selectCreateNote],
  createNote => createNote.background
)
export const selectCreateNoteIsArchived = createSelector(
  [selectCreateNote],
  createNote => createNote.isArchived
)
export const selectCreateNoteIsPinned = createSelector(
  [selectCreateNote],
  createNote => createNote.isPinned
)
export const selectCreateNoteIsCompleted = createSelector(
  [selectCreateNote],
  createNote => createNote.completed
)
