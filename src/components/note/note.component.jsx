import React from 'react'
import { Container, PinIconContainer, CompleteIconContainer, DragIconContainer, NoteContainer, 
  MainContainer, EmptyContainer, Title, DescriptionContent } from "./note.styles";

import BottomIcons from '../note-bottom-icons'
import Icon from '../icon'
import NoteEditable from '../note-editable'
import DateInformation from '../date-information'
import Highlight from 'react-highlighter';
import { Draggable } from 'react-beautiful-dnd'

import useHover from '../../hooks/useHover'
import useIsOpen from '../../hooks/useIsOpen'

import { connect} from 'react-redux'
import { editNoteAsync } from "../../redux/notes/notes.actions.js";
import { setHidden, setMessage } from '../../redux/notification/notification.actions.js'

const Note = (props) => {
  const {index, _id, title, description, background, isPinned, completed, isArchived, expireAt, createdAt, updatedAt} = props 
  const { headerListView } = props
  const { headerSearchValue='' } = props
  const { editNoteAsync } = props
  const { setHidden, setMessage } = props
  
  const [hovered, handleHover, setHovered] = useHover(false)
  const [wrapperRef, isOpen, setIsOpen] = useIsOpen(false, null, null, null)  
  
  return isOpen ? 
    <NoteEditable wrapperRef={wrapperRef} _id={_id} title={title} description={description} background={background} 
      isPinned={isPinned} completed={completed} expireAt={expireAt} isArchived={isArchived} createdAt={createdAt} updatedAt={updatedAt} 
    />
    : (
    <Draggable draggableId={_id} index={index} isDragDisabled={headerSearchValue ? true : false} >
      {(provided, snapshot) => (
      <Container ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} isDragging={snapshot.isDragging} 
        headerListView={headerListView} hovered={hovered} background={background} 
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      >
        <NoteContainer onClick={() => {
            if(!expireAt && !completed) setIsOpen(true)
            handleHover()}}
            wrapperRef={wrapperRef}>
          {title || description ? 
          <MainContainer >        
            <Title>
              <Highlight search={headerSearchValue} matchStyle={{background: '#ffd43b'}} >{title}</Highlight>
            </Title>
            <DescriptionContent>
              <Highlight search={headerSearchValue} matchStyle={{background: '#ffd43b'}} >{description}</Highlight>
            </DescriptionContent>
            <DateInformation updatedAt={updatedAt} createdAt={createdAt}/>
          </MainContainer> : <EmptyContainer>Empty note</EmptyContainer>
          }
        </NoteContainer>
        <PinIconContainer>
          {completed || expireAt ? null 
          : isPinned ? 
          <Icon icon='pin_dark' size={24} description='Unpin note' handleClick={() => 
            editNoteAsync({
              _id,
              isPinned: false
            })}/> 
          : 
          isArchived ? 
          <Icon icon='pin' size={24} description='Pin note' handleClick={() => {
            editNoteAsync({
              _id,
              isArchived: false,
              isPinned: true
            })
            setMessage('Note unarchived and pinned')
            setHidden(false)
          }}/> 
          :          
          <Icon icon='pin' size={24} description='Pin note' handleClick={() => {
            editNoteAsync({
              _id,              
              isPinned: true
            })            
          }}/> 
          }
        </PinIconContainer>
        <CompleteIconContainer >
          {expireAt ? null : completed ? 
            <Icon icon='restore' size={24} description='Restore note' handleClick={() => {
              editNoteAsync({
                _id,
                completed: false
              })
              setMessage('Note restored')
              setHidden(false)
            }}/>
            : 
            isArchived ? <Icon icon='completeTask' size={24} description='Complete note' handleClick={() => {
              editNoteAsync({
              _id,
              completed: true,
              isArchived: false,              
              })
              setMessage('Note unarchived and completed')
              setHidden(false)
            }}/>
            : 
            <Icon icon='completeTask' size={24} description='Complete note' handleClick={() => {
              editNoteAsync({
                _id,
                completed: true,
                isPinned: false   
              })
              setMessage('Note completed')
              setHidden(false)
            }}/>
            }
        </CompleteIconContainer>
        {headerSearchValue ? 
          null 
        :
          <DragIconContainer >
            <Icon icon='drag' size={24} containerStyles={{padding: 0, margin: 0}} style={{cursor: 'grab', padding: 0, margin: 0}} description='Drag note'/> 
          </DragIconContainer>
        }
        <BottomIcons _id={_id} completed={completed} expireAt={expireAt} isArchived={isArchived} /> 
      </Container>    
      )}
    </Draggable>
  )
}

const mapDispatchToProps = dispatch => ({  
  editNoteAsync: note => dispatch(editNoteAsync(note)),
  setHidden: bool => dispatch(setHidden(bool)),
  setMessage: message => dispatch(setMessage(message)),
})

export default connect(null, mapDispatchToProps)(Note)