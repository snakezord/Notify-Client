import { notificationActionTypes } from './notification.types.js'

const INITIAL_STATE = {
  hidden: false,
  notification: ''
}

const notificationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case notificationActionTypes.SET_NOTIFICATION:
            return {
                ...state,
                notification: action.payload
            }        
        default:
            return state
    }
}

export default notificationReducer