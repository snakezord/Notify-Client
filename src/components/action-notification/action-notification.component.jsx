import React from 'react'
import { Container, Text } from './action-notification.styles';

import Icon from '../icon'

import { connect} from 'react-redux'
import { setHidden, setMessage } from '../../redux/notification/notification.actions.js'
import { createStructuredSelector } from 'reselect'
import { selectHidden, selectMessage } from '../../redux/notification/notification.selectors.js'

import useTimeout from '../../hooks/useTimeout'

const ActionNotification = (props) => {

  const { hidden, message } = props
  const { setHidden } = props
  
  useTimeout(() => setHidden(true), 5000)

  return (
    <Container hidden={hidden}> 
      <Text>
        {message}
      </Text>
      {/* <Button>Undo</Button> */}
      <Icon icon='clear' color='#ffd43b' size={24} description='Clear notification' 
        handleClick={() => {
          setHidden(true)          
        }}/> 
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  hidden: selectHidden,
  message: selectMessage
})

const mapDispatchToProps = dispatch => ({
  setHidden: bool => dispatch(setHidden(bool)),
  setMessage: message => dispatch(setMessage(message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ActionNotification)
