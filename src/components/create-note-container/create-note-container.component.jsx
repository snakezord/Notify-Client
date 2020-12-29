import React from 'react'
import { Container } from './create-note-container.styles'
import CreateNote from '../create-note'

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHeaderSearchFocused, selectHeaderSearchValue } from '../../redux/header/header.selectors.js'
import { selectCreateNoteHidden } from '../../redux/ui/ui.selectors.js'

const CreateNoteContainer = ({ searchFocused, headerSearchValue, createNoteHidden }) => {
  return (
    <Container headerSearchValue={headerSearchValue}>
      {(headerSearchValue || searchFocused || createNoteHidden) ? null : <CreateNote />}
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  searchFocused: selectHeaderSearchFocused,
  headerSearchValue: selectHeaderSearchValue,
  createNoteHidden: selectCreateNoteHidden
})

export default connect(mapStateToProps, null)(CreateNoteContainer)