import { HeaderActionTypes } from './header.types'

const INITIAL_STATE = {
  menu_open: false,
  search_focused: false,
  search_value: '',
  refresh: false,
  list_view: false,
  theme: false
}

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeaderActionTypes.TOGGLE_MENU_OPEN:
      return {
        ...state,
        menu_open: !state.menu_open
      }
    case HeaderActionTypes.SET_SEARCH_FOCUSED:      
      return {
        ...state,
        search_focused: action.payload
      }
    case HeaderActionTypes.SET_SEARCH_VALUE:
      return {
        ...state,
        search_value: action.payload
      }
      
    case HeaderActionTypes.TOGGLE_REFRESH:
      return {
        ...state,
        refresh: !state.refresh
      }
    case HeaderActionTypes.TOGGLE_LIST_VIEW:
      return {
        ...state,
        list_view: !state.list_view
      }
    case HeaderActionTypes.TOGGLE_THEME:
      return {
        ...state,
        theme: !state.theme
      }

    default:
      return state
    }
}

export default headerReducer