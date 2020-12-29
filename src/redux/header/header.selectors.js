import { createSelector } from 'reselect'

const selectHeader = state => state.header

export const selectHeaderMenuOpen = createSelector(
  [selectHeader],
  header => header.menu_open
)
export const selectHeaderSearchFocused = createSelector(
  [selectHeader],
  header => header.search_focused
)
export const selectHeaderSearchValue = createSelector(
  [selectHeader],
  header => header.search_value
)
export const selectHeaderRefresh = createSelector(
  [selectHeader],
  header => header.refresh
)
export const selectHeaderListView = createSelector(
  [selectHeader],
  header => header.list_view
)
export const selectHeaderTheme = createSelector(
  [selectHeader],
  header => header.theme
)

