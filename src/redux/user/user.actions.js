import { UserActionTypes } from './user.types'
import { postData, getData } from '../../API/api.utils.js' 
import Cookies from 'js-cookie'

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})
export const loginStart = () => ({
  type: UserActionTypes.FETCH_START  
})
export const fetchStart = () => ({
  type: UserActionTypes.FETCH_START  
})
export const loginSuccess = authToken => ({
  type: UserActionTypes.LOGIN_SUCCESSFUL,
  payload: authToken
})
export const logoutSuccess = () => ({
  type: UserActionTypes.LOGOUT_SUCCESSFUL  
})
export const fetchFailure = errorMessage => ({
  type: UserActionTypes.FETCH_FAILURE,
  payload: errorMessage
})

export const signInWithGoogleAsync = tokenId => async dispatch => {
  dispatch(fetchStart())
  try {
    const result = await postData('/users/google/login', { tokenId })
    
    const { data } = result        
    if(!data) throw Error(result)

    dispatch(setCurrentUser(data.user))
    dispatch(loginSuccess(data.token))
    // unsafe but fuck it, YOLO
    Cookies.set('authToken', data.token, {expires: 1})
  } catch (error) {    
    dispatch(fetchFailure(error.message))
  }    
}
export const getUserAsync = (sessionToken) => async dispatch => {
  dispatch(fetchStart())
  try {
    const result = await getData('/users/me')

    const { data } = result
    if(!data) throw Error(result)

    dispatch(setCurrentUser(data))
    dispatch(loginSuccess(sessionToken))
  } catch (error) {
    dispatch(fetchFailure(error.message))
  }    
}
export const logoutAsync = () => async dispatch => {
  dispatch(fetchStart())
  try {
    const tokenId = Cookies.get('authToken')
    await postData('/users/logout', { tokenId })
    Cookies.remove('authToken')
    dispatch(logoutSuccess())
  } catch (error) {
    dispatch(fetchFailure(error.message))
  }
}