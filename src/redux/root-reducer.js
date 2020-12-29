import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'  
import headerReducer from './header/header.reducer'
import notesReducer from './notes/notes.reducer'
import createNoteReducer from './create-note/create-note.reducer'
import notificationReducer from './notification/notification.reducer'
import uiReducer from './ui/ui.reducer'

const rootReducer = combineReducers({
  user: userReducer,
  header: headerReducer,
  notes: notesReducer,    
  createNote: createNoteReducer,
  notification: notificationReducer,
  ui: uiReducer,
})

export default rootReducer