import { CreateNoteActionTypes } from './create-note.types'

export const setTitle = title => ({
  type: CreateNoteActionTypes.SET_TITLE,
  payload: title
})
export const setDescription = description => ({
  type: CreateNoteActionTypes.SET_DESCRIPTION,
  payload: description
})
export const setBackground = background => ({
  type: CreateNoteActionTypes.SET_BACKGROUND,
  payload: background
})
export const setIsArchived = bool => ({
  type: CreateNoteActionTypes.SET_IS_ARCHIVED,
  payload: bool
})
export const setIsPinned = bool => ({
  type: CreateNoteActionTypes.SET_IS_PINNED,
  payload: bool
})
export const setIsCompleted = bool => ({
  type: CreateNoteActionTypes.SET_IS_COMPLETED,
  payload: bool
})
export const resetState = () => ({
  type: CreateNoteActionTypes.RESET_STATE,  
})