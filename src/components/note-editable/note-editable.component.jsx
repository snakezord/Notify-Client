import React from 'react'
import { Container, NoteContainer, NoteHeader, HeaderText, NoteContentContainer, MainContainer} from './note-editable.styles'
 
import BottomIcons from '../note-bottom-icons'
import NoteDescription from '../note-description'
import Icon from '../icon'
import DateInformation from '../date-information'

import { connect} from 'react-redux'

import { editNoteAsync } from "../../redux/notes/notes.actions.js";
import { setHidden, setMessage } from '../../redux/notification/notification.actions.js'

export const NoteEditable = ({_id, title, description, background, wrapperRef, isPinned, completed, expireAt, isArchived, createdAt, updatedAt, ...otherProps}) => {
  
  const { editNoteAsync } = otherProps
  const { setHidden, setMessage } = otherProps

  const styleTitle = {
    fontWeight: 500, 
    fontSize: '1.6rem',  
  }
  
  const styleDescription = {
    fontWeight: 400, 
    fontSize: '1.2rem',      
  }

  return (
    <Container>
      <NoteContainer ref={wrapperRef} >
        <NoteHeader>
          {completed ? null : <Icon icon='completeTask' color='#E3E3E3' size={24} description='Complete note' handleClick={() => {
            editNoteAsync({
              _id, 
              completed: true,
              isPinned: false
            })
            setMessage('Note completed')
            setHidden(false)
          }}/>}
          <HeaderText></HeaderText>
          {isPinned ? 
            <Icon icon='pin_dark' color='#E3E3E3' size={24} description='Unpin note' handleClick={() => editNoteAsync({
              _id,
              isPinned: false
            })}/> 
          : <Icon icon='pin' color='#E3E3E3' size={24} description='Pin note' handleClick={() => editNoteAsync({
              _id,
              isPinned: true
            })}/>
          }
        </NoteHeader>
        <NoteContentContainer background={background}>
          <MainContainer>
            <NoteDescription _id={_id} autoFocus={true} title={title} style={styleTitle} name='title' placeholder='Title'/>
            <NoteDescription _id={_id} description={description} style={styleDescription} name='description' placeholder='Note'/>
            {title || description ? <DateInformation updatedAt={updatedAt} createdAt={createdAt}/> : null}
          </MainContainer>
          <BottomIcons _id={_id} completed={completed} expireAt={expireAt} isArchived={isArchived}/>
        </NoteContentContainer>
      </NoteContainer>
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({  
  editNoteAsync: note => dispatch(editNoteAsync(note)),
  setHidden: bool => dispatch(setHidden(bool)),
  setMessage: message => dispatch(setMessage(message)),
})

export default connect(null, mapDispatchToProps)(NoteEditable)
