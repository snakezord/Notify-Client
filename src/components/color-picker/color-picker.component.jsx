import React from 'react'
import { ColorsContainer } from './color-picker.styles'
import { CirclePicker } from 'react-color';
import colors from './colors.data.js'

import { connect} from 'react-redux'
import { setBackground } from '../../redux/create-note/create-note.actions.js'

import { editNoteAsync } from "../../redux/notes/notes.actions.js";


const ColorPicker = ({ setBackground, _id, editNoteAsync }) => {

  return (
    <ColorsContainer >
      <CirclePicker colors={colors} onChange={color => {
        if(setBackground && !_id) setBackground(color.hex)
        if(_id) {          
          editNoteAsync({
          _id,
          background: color.hex
          })
        }}}
        width='10rem' circleSize={25}/>
    </ColorsContainer>
  )
}

const mapDispatchToProps = dispatch => ({   
  setBackground: color => dispatch(setBackground(color)),
  editNoteAsync: note => dispatch(editNoteAsync(note)),
})

export default connect(null, mapDispatchToProps)(ColorPicker)
