import React from 'react'
import { Container, ImageContainer, Image } from './photo.styles'

import UserDropDown from '../user-dropdown'
import Description from '../description'

import useHover from '../../hooks/useHover'
import useIsOpen from '../../hooks/useIsOpen'

import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from '../../redux/user/user.selectors.js'

const Photo = ({ description, currentUser }) => {
  
  const [wrapperRef, isOpen, setIsOpen] = useIsOpen(false, null, null, null)

  const [hovered, handleHover] = useHover(false)

  return (
    <Container ref={wrapperRef}>
      <ImageContainer onMouseEnter={handleHover} onMouseLeave={handleHover} onClick={() => setIsOpen(isOpen => !isOpen)}>
        <Image src={currentUser.googlePicture} /> 
        { hovered && !isOpen ? <Description description={description} name={currentUser.name} email={currentUser.email} /> : null }
      </ImageContainer>
      { isOpen ? <UserDropDown name={currentUser.name} email={currentUser.email} picture={currentUser.googlePicture} /> : null }
    </Container>      
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})
export default connect(mapStateToProps, null)(Photo)