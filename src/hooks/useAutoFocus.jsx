import {useEffect, useRef} from 'react'

const useAutoFocus = (focused) => {

  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current && focused) {
      inputElement.current.focus();
    }
  }, [focused])

  return inputElement
}

export default useAutoFocus
