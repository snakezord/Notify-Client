import { CreateNoteActionTypes } from './create-note.types'

export const INITIAL__STATE = {
  title: '',
  description: '',
  background: '#ffffff',
  completed: false,
  isArchived: false,
  isPinned: false,
}

const createNoteReducer = (state = INITIAL__STATE, action) => {
    switch(action.type){
        case CreateNoteActionTypes.SET_TITLE:
          return {
            ...state,
            title: action.payload
          }
        case CreateNoteActionTypes.SET_DESCRIPTION:
          return {
            ...state,
            description: action.payload
          }
        case CreateNoteActionTypes.SET_BACKGROUND:
          return {
            ...state,
            background: action.payload
          }
        case CreateNoteActionTypes.SET_IS_ARCHIVED:
          return {
            ...state,
            isArchived: action.payload
          }
        case CreateNoteActionTypes.SET_IS_PINNED:
          return {
            ...state,
            isPinned: action.payload
          }
        case CreateNoteActionTypes.SET_IS_COMPLETED:
          return {
            ...state,
            completed: action.payload
          }
        case CreateNoteActionTypes.RESET_STATE:
          return {
            ...INITIAL__STATE
          }
        default:
            return state
    }
}

export default createNoteReducer