import {useState, useEffect, useRef} from 'react'

import { isEqual } from 'lodash'
import { INITIAL__STATE } from '../redux/create-note/create-note.reducer.js'

const useIsOpen = (init, note, noteAsyncFunc, cleanNoteState) => {
  const wrapperRef = useRef(null)
  
  const [isOpen, setIsOpen] = useState(init)  
  
  useEffect (() => {
    
    const handleClickOutside = e => {
      if (isOpen && wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false)
        if(cleanNoteState) cleanNoteState()
        if (!isEqual(note, INITIAL__STATE) && noteAsyncFunc) noteAsyncFunc(note)
      }
    }

    document.addEventListener('mousedown', handleClickOutside);  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, note, noteAsyncFunc, cleanNoteState])

  return [wrapperRef, isOpen, setIsOpen]
  
}

export default useIsOpen
