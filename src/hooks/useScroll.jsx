import {useState, useEffect} from 'react'

const useScroll = (init) => {
  const [scrolled, setScroll] = useState(init)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
      window.scrollY > 1 ? setScroll(true) : setScroll(false)
  }

  return scrolled
}

export default useScroll
