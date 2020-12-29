import { useEffect } from 'react'

const useTimeout = (offset) => {
  
  useEffect(() => {
    const date = new Date()
    date.setSeconds(date.getSeconds() + offset)    
  }, [offset])
}

export default useTimeout
