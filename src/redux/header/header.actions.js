import { HeaderActionTypes } from './header.types'

export const toggleMenuOpen = () => ({
  type: HeaderActionTypes.TOGGLE_MENU_OPEN
})

export const setSearchFocused = bool => ({
  type: HeaderActionTypes.SET_SEARCH_FOCUSED,
  payload: bool
})

export const setSearchValue = value =>  ({
  type: HeaderActionTypes.SET_SEARCH_VALUE,
  payload: value
})

export const toggleRefresh = () => ({
  type: HeaderActionTypes.TOGGLE_REFRESH,
})

export const toggleListView = () => ({
  type: HeaderActionTypes.TOGGLE_LIST_VIEW,
})

export const toggleTheme = () => ({
  type: HeaderActionTypes.TOGGLE_THEME,
})






