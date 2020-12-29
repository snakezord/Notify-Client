import { createSelector } from 'reselect'

const selectNotification = state => state.notification

export const selectHidden = createSelector(
  [selectNotification],
  notification => notification.hidden
)
export const selectMessage = createSelector(
  [selectNotification],
  notification => notification.message
)