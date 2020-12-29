import React from 'react'
import { ButtonContainer, ButtonText } from "./side-menu-button.styles";
import Icon from '../icon'

import { connect} from 'react-redux'
import { setActiveSideMenuButton } from '../../redux/ui/ui.actions.js'

const Button = ({ name, icon, link , setActiveSideMenuButton }) => {
  
  return (
  <ButtonContainer onClick={() => {
    setActiveSideMenuButton(link)
  }} role='Button' name={name} to={link} >
    <Icon active={link} icon={icon} size={24} />
    <ButtonText >{name}</ButtonText>
  </ButtonContainer>
)}

const mapDispatchToProps = dispatch => ({
  setActiveSideMenuButton: route => dispatch(setActiveSideMenuButton(route)),      
})

export default connect(null, mapDispatchToProps)(Button)