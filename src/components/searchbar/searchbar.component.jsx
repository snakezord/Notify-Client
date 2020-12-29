import React from 'react'
import { SearchBarContainer, SearchBar, SearchIconContainer, ClearIconContainer } from './searchbar.styles.jsx'

import Icon from '../icon'

import useAutoFocus from '../../hooks/useAutoFocus'

import { connect} from 'react-redux'
import { filterNotes } from '../../redux/notes/notes.actions.js'

const Searchbar = ({ setSearchFocused, searchFocused, searchValue, setSearchValue, filterNotes}) => {
  
  const inputElement = useAutoFocus(searchFocused)
  
  return (
    <SearchBarContainer>
      <SearchIconContainer>
        <Icon icon='search' containerStyles={{margin: 0}} size={24} description='Search' handleClick={() => setSearchFocused(true)}/>
      </SearchIconContainer>
      <SearchBar
        onBlur={() => setSearchFocused(false)}
        value={searchValue}
        ref={inputElement}
        onChange={e => {
          setSearchValue(e.target.value)
          filterNotes(e.target.value)}
        }
        onFocus={() => setSearchFocused(true)} 
        placeholder='Search'/>
      {searchFocused ?
      <ClearIconContainer>
       <Icon icon='clear' containerStyles={{margin: 0}} size={24} description='Clear Search' 
        handleClick={() => {
          setSearchFocused(false)
          setSearchValue('')
          }}/> 
      </ClearIconContainer>
        : null}
    </SearchBarContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  filterNotes: searchValue => dispatch(filterNotes(searchValue))
})

export default connect(null, mapDispatchToProps)(Searchbar)
