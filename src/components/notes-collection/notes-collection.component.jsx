import React, { useEffect, useState } from 'react'
import { Container, Title, NotesContainer } from './notes-collection.styles'
import Note from '../note'

import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd'
import { useMediaQuery } from 'react-responsive'

import { connect } from 'react-redux'
import { addCollection, editNoteAsync } from "../../redux/notes/notes.actions.js";

import { createStructuredSelector } from "reselect";
import { selectHeaderListView, selectHeaderMenuOpen, selectHeaderSearchValue } from '../../redux/header/header.selectors.js'
import { selectNotesCollection } from '../../redux/notes/notes.selectors.js'


const Notes = (props) => {  
  const { headerListView, headerMenuOpen, headerSearchValue } = props

  const { notesCollection } = props
  const { setCreateNoteHidden } = props
  const { primaryCollection, filteredPrimaryCollection } = props
  const { secondaryCollection, filteredSecondaryCollection} = props  
  const { addCollection, addCollectionAsync, editNoteAsync } = props  
  

  const isSmallScreen = useMediaQuery({ query: '(max-width: 610px)' })

  const [direction, setDirection] = useState('horizontal')

  useEffect(() => {
    setCreateNoteHidden()
    isSmallScreen ? setDirection('vertical') : headerListView ? setDirection('vertical') : setDirection('horizontal')      
  }, [addCollectionAsync, headerListView, isSmallScreen, setCreateNoteHidden])
  
  const onDragEnd = result => {
    if(headerSearchValue) return    
    const { destination, source, draggableId } = result    
    if(!destination) return
    if(destination.droppableId === source.droppableId && destination.index === source.index) return
    
    const newNotesCollection = [...notesCollection]    
    
    let _id = null
    if(source.droppableId === 'default') _id = primaryCollection[destination.index]._id
    if(source.droppableId === 'pinned') _id = secondaryCollection[destination.index]._id
    
    const source_idx = notesCollection.findIndex(e => e._id === draggableId)
    const destination_idx = notesCollection.findIndex(e => e._id === _id)

    let cutOut = newNotesCollection.splice(source_idx, 1)[0]
    newNotesCollection.splice(destination_idx, 0, cutOut)
    
    addCollection(newNotesCollection)
    
    newNotesCollection.map(async (el, idx) => {
      await editNoteAsync({
        _id: el._id,
        position: idx
      })
    }) 
  }
  
  return (
    <Container headerMenuOpen={headerMenuOpen} headerListView={headerListView}>
      {secondaryCollection.length ? <Title headerListView={headerListView}>Pinned</Title> : null}
      <DragDropContext onDragEnd={onDragEnd} >
        <Droppable droppableId='pinned' direction={direction}>
          {provided => (
          <NotesContainer headerListView={headerListView} ref={provided.innerRef} {...provided.droppableProps}>        
            {headerSearchValue ?
              filteredSecondaryCollection.map(({_id, ...otherProps}, index) => <Note index={index} key={_id} _id={_id} headerListView={headerListView} headerSearchValue={headerSearchValue} {...otherProps} />)
            : secondaryCollection.map(({_id, ...otherProps}, index) => <Note index={index} key={_id} _id={_id} headerListView={headerListView} {...otherProps} />)
            }
            {provided.placeholder}
          </NotesContainer>
          )}
        </Droppable>     
      </DragDropContext>
      {primaryCollection.length && secondaryCollection.length ? <Title headerListView={headerListView}>Others</Title> : null}
      <DragDropContext onDragEnd={onDragEnd} >
        <Droppable droppableId='default' direction={direction}>
          {provided => (
          <NotesContainer headerListView={headerListView} ref={provided.innerRef} {...provided.droppableProps}>        
            {
            headerSearchValue ? 
              filteredPrimaryCollection.map(({_id, ...otherProps}, index) => <Note index={index} key={_id} _id={_id} headerListView={headerListView} headerSearchValue={headerSearchValue} {...otherProps} />)
            : primaryCollection.map(({_id, ...otherProps}, index) => <Note index={index} key={_id} _id={_id} headerListView={headerListView} {...otherProps} />)
            }
            {provided.placeholder}
          </NotesContainer>
          )}
        </Droppable>      
      </DragDropContext>
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  headerListView: selectHeaderListView,
  headerMenuOpen: selectHeaderMenuOpen,
  headerSearchValue: selectHeaderSearchValue,  
  notesCollection: selectNotesCollection,      
})

const mapDispatchToProps = dispatch => ({
  addCollection: collection => dispatch(addCollection(collection)),  
  editNoteAsync: note => dispatch(editNoteAsync(note)),   
})

export default connect(mapStateToProps, mapDispatchToProps)(Notes)