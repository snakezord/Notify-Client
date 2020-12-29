import React from 'react'
import { NoteContainer, InputContainer, Input, PinIconContainer } from './create-note.styles'

import NoteDescription from '../note-description'
import BottomIcons from '../note-bottom-icons'
import Icon from '../icon'

import useIsOpen from '../../hooks/useIsOpen'

import { connect} from 'react-redux'
import { setTitle, setDescription, setIsPinned, setIsArchived, resetState } from '../../redux/create-note/create-note.actions.js'
import { createStructuredSelector } from 'reselect'
import { selectCreateNoteBackground, selectCreateNoteTitle, selectCreateNoteDescription, selectCreateNoteIsPinned, selectCreateNoteIsArchived, selectCreateNote } from '../../redux/create-note/create-note.selectors.js'

import { addNoteAsync } from "../../redux/notes/notes.actions.js";

const CreateNote = (props) => {
  const { setTitle, setDescription, resetState, setIsPinned, setIsArchived } = props  
  const { title, background, isPinned } = props
  const { newNote } = props
  const { addNoteAsync } = props
  
  const cleanNoteState = () => {
    resetState()
  }

  const [wrapperRef, isOpen, setIsOpen] = useIsOpen(false, newNote, addNoteAsync, cleanNoteState)

  return isOpen ? (
    <NoteContainer ref={wrapperRef} background={background}>
      <InputContainer autoComplete="off">
        <Input value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' />
        <NoteDescription setDescription={setDescription} placeholder='Take a note...' />
        <BottomIcons setIsOpen={setIsOpen} newNote={newNote} button={true} cleanNoteState={cleanNoteState}/>
      </InputContainer>
      <PinIconContainer>
        {isPinned ? 
          <Icon icon='pin_dark' size={24} description='Unpin note' handleClick={() => setIsPinned(false)} /> 
        : <Icon icon='pin' size={24} description='Pin note' handleClick={() => {
            setIsPinned(true)
            setIsArchived(false)
          }}/>}
      </PinIconContainer>      
    </NoteContainer>
  )
  :(
  <NoteContainer ref={wrapperRef} onClick={() => {
    setIsOpen(true)
    }}>
    <InputContainer type='text'>
      <Input value='' onChange={() => ''} placeholder='Take a note...'/>
    </InputContainer>    
  </NoteContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  setTitle: title => dispatch(setTitle(title)),
  setDescription: description => dispatch(setDescription(description)),  
  setIsPinned: bool => dispatch(setIsPinned(bool)),
  setIsArchived: bool => dispatch(setIsArchived(bool)),
  addNoteAsync: note => dispatch(addNoteAsync(note)),
  resetState: () => dispatch(resetState()),
})

const mapStateToProps = createStructuredSelector({
  title: selectCreateNoteTitle,
  description: selectCreateNoteDescription,
  background: selectCreateNoteBackground,
  isPinned: selectCreateNoteIsPinned,
  isArchived: selectCreateNoteIsArchived,
  newNote: selectCreateNote 
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote)