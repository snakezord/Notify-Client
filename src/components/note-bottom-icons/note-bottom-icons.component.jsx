import React from 'react'
import { Button, BottomIconsContainer, DeletedIconsContainer } from './note-bottom-icons.styles'

import { connect} from 'react-redux'
import { setIsArchived, setIsPinned } from '../../redux/create-note/create-note.actions.js'
import { setHidden, setMessage } from '../../redux/notification/notification.actions.js'
import { addNoteAsync, editNoteAsync, removeNoteAsync } from "../../redux/notes/notes.actions.js";

import { isEqual } from 'lodash'
import { INITIAL__STATE } from '../../redux/create-note/create-note.reducer.js'

import Icon from '../icon'

const BottomIcons = (props) => {
  const { setIsOpen, setIsArchived, setIsPinned, cleanNoteState, setHidden, setMessage } = props
  const { addNoteAsync, editNoteAsync, removeNoteAsync } = props
  const { button, newNote } = props
  const { _id, expireAt, isArchived, completed } = props
  return (
    <BottomIconsContainer button={button}>
      {expireAt ? null : <Icon icon='colorsPalette' size={20} description='Change color' _id={_id}/>}
      {expireAt || completed ? null : isArchived || (newNote && newNote.isArchived) ? 
      <Icon icon='unarchive_dark' size={20} description='Unarchive' handleClick={() => {
        if(!_id) setIsArchived(false)    
        if (_id) {
          editNoteAsync({_id, isArchived: false})
          setMessage('Note Unarchived')
          setHidden(false)
        }
      }}/>
      : 
      <Icon icon='archive_dark' size={20} description='Archive' handleClick={() => {
        if(!_id) {
          setIsArchived(true)
          setIsPinned(false)
          }
        if (_id) {
          editNoteAsync({_id, 
            isArchived: true,
            isPinned: false
          })
          setMessage('Note archived')
          setHidden(false)
        }
        }}/>}
      {button ? 
        <Button onClick={() => {
          setIsOpen(false)
          if(cleanNoteState && !_id) cleanNoteState()
          if (!isEqual(newNote, INITIAL__STATE) && !_id) addNoteAsync(newNote) }}
        >
          Close
        </Button> 
        : expireAt ? 
        <DeletedIconsContainer>
          <Icon icon='restoreDeleted' size={20}  description='Restore' handleClick={() => {          
            if (_id) {
              editNoteAsync({_id, expireAt: null})
              setMessage('Note restored')
              setHidden(false)
              }       
            }}
          />
          <Icon icon='deleteForever' size={20}  description='Delete forever' handleClick={() => {          
            if (_id) {
              removeNoteAsync(_id)
              setMessage('Note deleted forever')
              setHidden(false)
              }       
            }}
          />
        </DeletedIconsContainer>        
        : 
        <Icon icon='bin_dark' size={20}  description='Delete' handleClick={() => {
          const date = new Date()
          date.setSeconds(date.getSeconds() + 60)
          if (_id) {
            editNoteAsync({_id, expireAt: date})
            setMessage('Note binned. Will expire in approximately 1 minute')
            setHidden(false)
            }       
          }}
        />
      }
    </BottomIconsContainer>
  )
}

const mapDispatchToProps = dispatch => ({ 
  setIsArchived: bool => dispatch(setIsArchived(bool)), 
  setIsPinned: bool => dispatch(setIsPinned(bool)), 
  addNoteAsync: note => dispatch(addNoteAsync(note)),  
  removeNoteAsync: _id => dispatch(removeNoteAsync(_id)),
  editNoteAsync: note => dispatch(editNoteAsync(note)),
  setHidden: bool => dispatch(setHidden(bool)),
  setMessage: message => dispatch(setMessage(message)),
})


export default connect(null, mapDispatchToProps)(BottomIcons)
