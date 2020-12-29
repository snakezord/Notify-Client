import React from 'react'

import { connect} from 'react-redux'
import { toggleMenuOpen, setSearchFocused, setSearchValue, toggleListView } from "../../redux/header/header.actions.js";
import { addCollectionAsync } from "../../redux/notes/notes.actions.js";

import { createStructuredSelector } from "reselect";
import { selectHeaderMenuOpen, selectHeaderSearchFocused, selectHeaderSearchValue, selectHeaderListView } from '../../redux/header/header.selectors.js'
import { selectIsFetching } from '../../redux/notes/notes.selectors.js'

import './header.styles.jsx'

import { HeaderContainer, LeftMenuContainer, LogoContainer,
  TitleContainer, Title, RightMenuContainer } from './header.styles'
import { ReactComponent as Logo } from '../../images/notes.svg'

import Photo from '../photo'
import Icon from '../icon'
import Searchbar from '../searchbar'

import { useLocation } from 'react-router-dom'
import useScroll from '../../hooks/useScroll'

const Header = (props) => {  
  
  const { headerMenuOpen, searchFocused, searchValue, headerListView, isFetching } = props
  const { toggleMenuOpen, setSearchFocused, setSearchValue, toggleListView, addCollectionAsync }= props

  const location = useLocation()
  const path = location.pathname.replace('/', '')
  const pathName = path.charAt(0).toUpperCase() + path.slice(1)  

  const scrolled = useScroll(false)

  return (
    <HeaderContainer scroll={scrolled}>
      <LeftMenuContainer>
        {headerMenuOpen 
        ? <Icon handleClick={() => toggleMenuOpen()} icon='hamburgerOpen' size={24} description='Main Menu' /> 
        : <Icon handleClick={() => toggleMenuOpen()} icon='hamburgerClosed' size={24} description='Main Menu' /> }
        <LogoContainer>
          <Logo style={{width: '2rem'}} />
        </LogoContainer>
        <TitleContainer>
          <Title>{pathName ? pathName : 'Notify'}</Title>
        </TitleContainer>
      </LeftMenuContainer>
      
      <Searchbar setSearchFocused={setSearchFocused} searchFocused={searchFocused} searchValue={searchValue} setSearchValue={setSearchValue} />
      
      <RightMenuContainer>
        <Icon isFetching={isFetching} handleClick={() => addCollectionAsync()} icon='refresh' size={24} description='Refresh' />
        {headerListView 
        ? <Icon handleClick={() => toggleListView()} icon='gridView' size={24} description='Grid view' /> 
        : <Icon handleClick={() => toggleListView()} icon='listView' size={24} description='List view' />}
        <Photo description='Account' name='roman zhydyk' email='nsake@hotmail.com' />
      </RightMenuContainer>
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  headerMenuOpen: selectHeaderMenuOpen,
  searchFocused: selectHeaderSearchFocused,
  searchValue: selectHeaderSearchValue,
  headerListView: selectHeaderListView,
  isFetching: selectIsFetching,
})

const mapDispatchToProps = dispatch => ({
  toggleMenuOpen: () => dispatch(toggleMenuOpen()),  
  setSearchValue: value => dispatch(setSearchValue(value)),
  setSearchFocused: bool => dispatch(setSearchFocused(bool)),
  toggleListView: () => dispatch(toggleListView()),
  addCollectionAsync: () => dispatch(addCollectionAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)