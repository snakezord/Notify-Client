import { notificationActionTypes } from './notification.types'

export const setHidden = bool => ({
  type: notificationActionTypes.SET_HIDDEN,
  payload: bool
})
export const setMessage = message => ({
  type: notificationActionTypes.SET_MESSAGE,
  payload: message
})