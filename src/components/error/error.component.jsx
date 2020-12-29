import React from 'react'
import { Container, Message } from './error.styles'

const Error = ({message}) => {
  return (
    <Container>
      <Message>{ message }</Message>
      <Message>{'Please try to reload the page.'}</Message>
    </Container>
  )
}

export default Error
