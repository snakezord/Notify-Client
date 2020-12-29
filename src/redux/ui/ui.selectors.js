import { createSelector } from 'reselect'

const selectUI = state => state.ui

export const selectCreateNoteHidden = createSelector(
  [selectUI],
  ui => ui.createNoteHidden
)
export const selectActiveSideMenuButton = createSelector(
  [selectUI],
  ui => ui.activeSideMenuButton
)
