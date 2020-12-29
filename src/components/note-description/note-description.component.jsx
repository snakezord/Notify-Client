import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import { Container } from './note-description.styles'

import useDebounce from '../../hooks/useDebounce'

import { connect} from 'react-redux'
import { editNoteAsync } from "../../redux/notes/notes.actions.js";

const NoteDescription = ({ _id, title, description, placeholder, setDescription, style, autoFocus, name, editNoteAsync }) => {

  const debounce = useDebounce(note => editNoteAsync(note), 1000)
  
  const handleChange = e => {
    const { name } = e.target
    const newValue = e.target.value
    if(setDescription && !_id) setDescription(newValue)
    if(_id) debounce({
      _id,
      [name]: newValue
    })
  }
  
  return (
    <Container>
      {title ? <TextareaAutosize defaultValue={title} onChange={handleChange} minRows={1} name={name} style={style}/> : null}
      {description ? <TextareaAutosize defaultValue={description} onChange={handleChange} name={name} minRows={1} style={style}/> : null}
      {placeholder && !title && !description ? <TextareaAutosize autoFocus={autoFocus} onChange={handleChange} name={name} minRows={1} placeholder={placeholder} style={style}/> : null}
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({   
  editNoteAsync: note => dispatch(editNoteAsync(note)),
})


export default connect(null, mapDispatchToProps)(NoteDescription)

