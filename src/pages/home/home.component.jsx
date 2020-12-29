import React, { useEffect } from 'react'
import { HomeContainer } from './home.styles.jsx'

import { Route, Switch } from 'react-router-dom';

import Header from '../../components/header'
import SideMenu from '../../components/side-menu'
import CreateNoteContainer from '../../components/create-note-container'
import Notes from '../../components/notes-collection'
import EmptyCollection from '../../components/empty-collection'

import { useLocation } from 'react-router-dom';

import { connect } from 'react-redux'
import { setActiveSideMenuButton, setCreateNoteHidden } from '../../redux/ui/ui.actions.js'

import { createStructuredSelector } from "reselect";
import { selectPinnedNotes, selectFilteredPinnedNotes, 
  selectDefaultNotesCollection, selectFilteredDefaultNotesCollection,
  selectCompleteNotesCollection, selectFilteredCompleteNotesCollection,
  selectArchivedNotesCollection, selectFilteredArchivedNotesCollection,
  selectRemovedNotesCollection, selectFilteredRemovedNotesCollection} from '../../redux/notes/notes.selectors.js'

const Home = (props) => {

  const location = useLocation()
  const { setActiveSideMenuButton } = props
  const { setCreateNoteHidden } = props  
  
  const { defaultNotesCollection, filteredDefaultNotesCollection } = props
  const { pinnedNotes, filteredPinnedNotes} = props
  const { completeNotes, filteredCompleteNotes } = props
  const { archivedNotes, filteredArchivedNotes } = props
  const { removedNotes, filteredRemovedNotes } = props  

  useEffect(() => {
    setActiveSideMenuButton(location.pathname)
  }, [location.pathname, setActiveSideMenuButton])

  return (
  <HomeContainer>
    <Header />
    <SideMenu />
    <CreateNoteContainer />
    <Switch>      
      <Route     
        exact  
        path='/'
        render={props => {
          return defaultNotesCollection.length || pinnedNotes.length ? <Notes 
            primaryCollection={defaultNotesCollection}
            filteredPrimaryCollection={filteredDefaultNotesCollection}
            secondaryCollection={pinnedNotes}
            filteredSecondaryCollection={filteredPinnedNotes}
            setCreateNoteHidden={() => setCreateNoteHidden(false)}
            {...props}
          /> : <EmptyCollection icon='lightbulb' message='Create some notes' setCreateNoteHidden={() => setCreateNoteHidden(false)} /> }} 
      />
      <Route
        exact
        path='/completed' 
        render={props => {          
          return completeNotes.length ? <Notes
            primaryCollection={completeNotes}
            filteredPrimaryCollection={filteredCompleteNotes}
            secondaryCollection={[]}
            filteredSecondaryCollection={[]} 
            setCreateNoteHidden={() => setCreateNoteHidden(true)}
            {...props}
          /> : <EmptyCollection icon='completeTasks' message='No Completed notes' setCreateNoteHidden={() => setCreateNoteHidden(true)} /> }} 
      />
      <Route
        exact
        path='/archive' 
        render={props => {          
          return archivedNotes.length ? <Notes
            primaryCollection={archivedNotes}
            filteredPrimaryCollection={filteredArchivedNotes}
            secondaryCollection={[]}
            filteredSecondaryCollection={[]}
            setCreateNoteHidden={() => setCreateNoteHidden(true)}
            {...props}
        /> : <EmptyCollection icon='archive_dark' message='No notes in Archive' setCreateNoteHidden={() => setCreateNoteHidden(true)} /> }} 
      />
      <Route
        exact
        path='/bin' 
        render={props => {            
          return removedNotes.length ? <Notes
            primaryCollection={removedNotes}
            filteredPrimaryCollection={filteredRemovedNotes}
            secondaryCollection={[]}
            filteredSecondaryCollection={[]}
            setCreateNoteHidden={() => setCreateNoteHidden(true)}
            {...props}
          /> : <EmptyCollection icon='bin_dark' message='No notes in Recycle Bin' setCreateNoteHidden={() => setCreateNoteHidden(true)} /> }} 
      />
    </Switch>
  </HomeContainer>
  )  
}

const mapStateToProps = createStructuredSelector({    
  //home
  defaultNotesCollection: selectDefaultNotesCollection,
  filteredDefaultNotesCollection: selectFilteredDefaultNotesCollection,
  pinnedNotes: selectPinnedNotes,  
  filteredPinnedNotes: selectFilteredPinnedNotes,
  //archived
  archivedNotes: selectArchivedNotesCollection,
  filteredArchivedNotes: selectFilteredArchivedNotesCollection,
  //complete
  completeNotes: selectCompleteNotesCollection,
  filteredCompleteNotes: selectFilteredCompleteNotesCollection,
  //bin
  removedNotes: selectRemovedNotesCollection,
  filteredRemovedNotes: selectFilteredRemovedNotesCollection,
})

const mapDispatchToProps = dispatch => ({
  setActiveSideMenuButton: route => dispatch(setActiveSideMenuButton(route)),
  setCreateNoteHidden: bool => dispatch(setCreateNoteHidden(bool)),    
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)