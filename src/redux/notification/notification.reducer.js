import { notificationActionTypes } from './notification.types.js'

const INITIAL_STATE = {
  hidden: true,
  message: ''
}

const notificationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case notificationActionTypes.SET_HIDDEN:
            return {
                ...state,
                hidden: action.payload
            }
        case notificationActionTypes.SET_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state
    }
}

export default notificationReducer