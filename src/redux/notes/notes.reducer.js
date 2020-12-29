import { NoteActionTypes } from './notes.types'
import { filterNotes, addNote, removeNote, editNote } from './notes.utils'

const INITIAL_STATE = {
  isFetching: false,
  errorMessage: null,
  notesCollection: [],
  filteredNotesCollection: [],  
}

const noteReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case NoteActionTypes.ADD_COLLECTION:
      return {
        ...state,
        notesCollection: action.payload,        
      }
    case NoteActionTypes.ADD_NOTE:
      return {
        ...state,
        notesCollection: addNote(state.notesCollection, action.payload),        
      }
    case NoteActionTypes.REMOVE_NOTE:
      return {
        ...state,
        notesCollection: removeNote(state.notesCollection, action.payload),
        filteredNotesCollection: removeNote(state.filteredNotesCollection, action.payload),
      }
    case NoteActionTypes.EDIT_NOTE:
      return {
        ...state,
        notesCollection: editNote(state.notesCollection, action.payload), 
        filteredNotesCollection: editNote(state.filteredNotesCollection, action.payload), 
      }
    case NoteActionTypes.FILTER_NOTES:
      return {
        ...state,
        filteredNotesCollection: filterNotes(state.notesCollection, action.payload),        
      }
    case NoteActionTypes.FETCH_START:
      return {
        ...state,
        isFetching: true
      }
    case NoteActionTypes.FETCH_SUCCESS:
      return {
        ...state,        
        isFetching: false
      }
    case NoteActionTypes.FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }            
    default: 
      return state
  }
}

export default noteReducer