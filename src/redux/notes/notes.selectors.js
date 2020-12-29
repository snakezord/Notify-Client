import { createSelector } from 'reselect'

const selectNotes = state => state.notes

export const selectIsFetching = createSelector(
  [selectNotes],
  notes => notes.isFetching
)
export const selectNotesCollection = createSelector(
  [selectNotes],
  notes => notes.notesCollection
)
export const selectFilteredNotesCollection = createSelector(
  [selectNotes],
  notes => notes.filteredNotesCollection
)
export const selectDefaultNotesCollection = createSelector(
  [selectNotesCollection],
  notesCollection => notesCollection.filter(note => (!note.expireAt && !note.isPinned && !note.isArchived && !note.completed))
)
export const selectFilteredDefaultNotesCollection = createSelector(
  [selectFilteredNotesCollection],
  filteredNotesCollection => filteredNotesCollection.filter(note => (!note.expireAt && !note.isPinned && !note.isArchived && !note.completed))
)
export const selectPinnedNotes = createSelector(
  [selectNotesCollection],
  notesCollection => notesCollection.filter(note => (note.isPinned && !note.expireAt && !note.isArchived && !note.completed))
)
export const selectFilteredPinnedNotes = createSelector(
  [selectFilteredNotesCollection],
  filteredNotesCollection => filteredNotesCollection.filter(note => (note.isPinned && !note.expireAt && !note.isArchived && !note.completed))
)
export const selectCompleteNotesCollection = createSelector(
  [selectNotesCollection],
  notesCollection => notesCollection.filter(note => (!note.expireAt && !note.isPinned && !note.isArchived && note.completed))
)
export const selectFilteredCompleteNotesCollection = createSelector(
  [selectFilteredNotesCollection],
  filteredNotesCollection => filteredNotesCollection.filter(note => (!note.expireAt && !note.isPinned && !note.isArchived && note.completed))
)
export const selectArchivedNotesCollection = createSelector(
  [selectNotesCollection],
  notesCollection => notesCollection.filter(note => (!note.expireAt && !note.isPinned && note.isArchived && !note.completed))
)
export const selectFilteredArchivedNotesCollection = createSelector(
  [selectFilteredNotesCollection],
  filteredNotesCollection => filteredNotesCollection.filter(note => (!note.expireAt && !note.isPinned && note.isArchived && !note.completed))
)
export const selectRemovedNotesCollection = createSelector(
  [selectNotesCollection],
  notesCollection => notesCollection.filter(note => (note.expireAt))
)
export const selectFilteredRemovedNotesCollection = createSelector(
  [selectFilteredNotesCollection],
  filteredNotesCollection => filteredNotesCollection.filter(note => (note.expireAt))
)
export const selectNotesErrorMessage = createSelector(
  [selectNotes],
  notes => notes.errorMessage
)