import React, { useState, useEffect } from 'react'
import { Information } from "./date-information.styles";
import Icon from '../icon'

import Description from '../description'

import useHover from '../../hooks/useHover'

const DateInformation = ({ createdAt, updatedAt }) => {

  const [hovered, setHovered] = useHover(false)  

  const [updatedAtFormatted, setUpdatedAtFormatted] = useState(null)
  const [createdAtFormatted, setCreatedAtFormatted] = useState(null)

  useEffect(() => {
    setUpdatedAtFormatted(new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
  }).format(Date.parse(updatedAt)))

  setCreatedAtFormatted(new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
  }).format(Date.parse(createdAt)))
  
  }, [createdAt, updatedAt])
  
  const style = {
    padding: 0, 
    margin: 0,
    marginRight: '2px'
  }

  return (
    <Information onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Icon icon='edit' size={16} color='#959899' containerStyles={style} style={style} /> {updatedAtFormatted}
      {hovered ? <Description description={`Created ${createdAtFormatted}`}/> : null }
    </Information>
  )
}

export default DateInformation
