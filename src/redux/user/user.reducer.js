import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
  currentUser: null,
  isFetching: false,
  errorMessage: null,
  authToken: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }    
    case UserActionTypes.FETCH_START:
      return {
        ...state,
        isFetching: true
      }
    case UserActionTypes.LOGIN_SUCCESSFUL:
      return {
        ...state,
        authToken: action.payload,
        isFetching: false
      }
    case UserActionTypes.LOGOUT_SUCCESSFUL:
      return {
        ...state,        
        isFetching: false,
        currentUser: null,
        authToken: null
      }
    case UserActionTypes.FETCH_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
      }    
    default:
      return state
    }
}

export default userReducer