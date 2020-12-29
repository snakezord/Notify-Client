import { uiTypes } from './ui.types'

export const setCreateNoteHidden = bool => ({
  type: uiTypes.SET_CREATE_NOTE_HIDDEN,
  payload: bool
})
export const setActiveSideMenuButton = route => ({
  type: uiTypes.SET_ACTIVE_SIDE_MENU_BUTTON,
  payload: route
})