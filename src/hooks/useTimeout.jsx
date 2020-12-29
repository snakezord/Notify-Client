import { useEffect } from 'react'

const useTimeout = (callback, time) => {
  useEffect(() => {
    const timer = setTimeout(callback, time)
    return () => clearTimeout(timer)
  }, [callback, time])
}

export default useTimeout
