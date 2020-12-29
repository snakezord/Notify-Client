import { uiTypes } from './ui.types'

const INITIAL_STATE = {
  createNoteHidden: false,
  activeSideMenuButton: ''
}

const uiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case uiTypes.SET_CREATE_NOTE_HIDDEN:
            return {
                ...state,
                createNoteHidden: action.payload
            }
        case uiTypes.SET_ACTIVE_SIDE_MENU_BUTTON:
            return {
                ...state,
                activeSideMenuButton: action.payload
            }
        default:
            return state
    }
}

export default uiReducer