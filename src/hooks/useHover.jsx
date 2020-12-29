import {useState} from 'react'

const useHover = (init) => {
  const [hovered, setHovered] = useState(init)

  const handleHover = () => {
    setHovered(hovered => !hovered)
  }

  return [hovered, handleHover, setHovered]
}

export default useHover
