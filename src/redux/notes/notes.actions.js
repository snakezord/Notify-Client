import { NoteActionTypes } from './notes.types'
import { getData, postData, deleteData, updateData } from '../../API/api.utils'

export const addCollection = collection => ({
  type: NoteActionTypes.ADD_COLLECTION,
  payload: collection
})
export const addNote = note => ({
  type: NoteActionTypes.ADD_NOTE,
  payload: note
})
export const removeNote = _id => ({
  type: NoteActionTypes.REMOVE_NOTE,
  payload: _id
})
export const editNote = note => ({
  type: NoteActionTypes.EDIT_NOTE,
  payload: note
})
export const filterNotes = searchValue => ({
  type: NoteActionTypes.FILTER_NOTES,
  payload: searchValue
})
export const fetchStart = () => ({
  type: NoteActionTypes.FETCH_START  
})
export const fetchSuccess = () => ({
  type: NoteActionTypes.FETCH_SUCCESS,  
})
export const fetchFailure = errorMessage => ({
  type: NoteActionTypes.FETCH_FAILURE,
  payload: errorMessage
})

export const addCollectionAsync = () => async dispatch => {
  dispatch(fetchStart())
  try {
    const result = await getData('/tasks?sortBy=position:asc') 

    const { data } = result        
    if(!data) throw Error(result)
    
    dispatch(fetchSuccess())
    dispatch(addCollection(data))
  } catch (error) {
    dispatch(fetchFailure(error.message))
  }
}
export const addNoteAsync = note => async dispatch => {
  dispatch(fetchStart())
  try {
    const result = await postData('/tasks', note)

    const { data } = result        
    if(!data) throw Error(result)

    dispatch(fetchSuccess())
    dispatch(addNote(data))
  } catch (error) {
    dispatch(fetchFailure(error.message))
  }
}
export const removeNoteAsync = _id => async dispatch => {
  dispatch(fetchStart())
  dispatch(removeNote(_id))
  try {
    const result = await deleteData('/tasks', _id)

    const { data } = result        
    if(!data) throw Error(result)
    
    dispatch(fetchSuccess())    
  } catch (error) {
    dispatch(fetchFailure(error.message))
  }
}
export const editNoteAsync = note => async dispatch => {
  dispatch(fetchStart())
  dispatch(editNote(note))
  try {
    const result = await updateData('/tasks', note)

    const { data } = result        
    if(!data) throw Error(result)

    dispatch(fetchSuccess())
    dispatch(editNote(data))
  } catch (error) {
    dispatch(fetchFailure(error.message))
  }
}