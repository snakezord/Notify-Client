import React, { useEffect } from 'react'
import { Container, Message } from './empty-collection.styles'
import Icon from '../icon'

const EmptyCollection = ({ icon, message, setCreateNoteHidden }) => {

  useEffect(() => {
    setCreateNoteHidden()
  }, [setCreateNoteHidden])

  return (
    <Container>
      <Icon icon={icon} size={120} color='#959899' style={{cursor: 'default'}}/>
      <Message >{ message }</Message>
    </Container>
  )
}

export default EmptyCollection
