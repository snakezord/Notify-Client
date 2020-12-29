import React from 'react'

import { SideMenuContainer } from './side-menu.styles'
import Button from '../side-menu-button'

import { connect} from 'react-redux'
import { createStructuredSelector } from "reselect"
import { selectHeaderMenuOpen } from '../../redux/header/header.selectors.js'


const SideMenu = ({ headerMenuOpen }) => {
  
  return (
  <SideMenuContainer headerMenuOpen={headerMenuOpen} >
    <Button name='Notes' icon='lightbulb' link='/'/>
    <Button name='Completed' icon='completeTasks' link='/completed'/>
    <Button name='Archive' icon='archive' link='/archive'/>
    <Button name='Bin' icon='bin' link='/bin'/>
  </SideMenuContainer>
)}

const mapStateToProps = createStructuredSelector({
  headerMenuOpen: selectHeaderMenuOpen,
})

export default connect(mapStateToProps, null)(SideMenu)