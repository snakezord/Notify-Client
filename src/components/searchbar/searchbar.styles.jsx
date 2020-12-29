import styled, { css } from 'styled-components';
const IconContainer = css`
  position: absolute;
  z-index: 1;  
  visibility: visible;
  transition: opacity 0.3s ease-out;
`

export const SearchBarContainer = styled.div`
  position: relative;
  width: 40%;
  background: ${({theme}) => theme.colors.hoverBackground};
  border-radius: .5rem;
  height: 70%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  transition: background .3s;
  &:focus-within {
    background: ${({theme}) => theme.colors.background};
    border-bottom: 1.5px ${({theme}) => theme.colors.borderSecondary} solid;
    border-right: .5px ${({theme}) => theme.colors.borderPrimary} solid;
    border-left: .5px ${({theme}) => theme.colors.borderPrimary} solid; 
        
    @media screen and (max-width: 600px) {
      position: absolute;
      left: 1rem;
      width: 65%;         
      height: 70%;
      border: none;
      background: ${({theme}) => theme.colors.hoverBackground};
      animation: slide 0.6s forwards;
    } 
  }
  @keyframes slide {
    100% { 
      left: 0;
      height: 100%;    
      }
  }
`
export const SearchBar = styled.input`
  border-radius: .5rem;
  margin: 0 0 0 2.5rem;
  width: 100%;
  height: 100%;
  border: none;
  background: inherit;
  font-size: 1rem;  
  &:focus{
    outline: none;
  }
`
export const SearchIconContainer = styled.div`
  left: .5rem;
  ${IconContainer}
`
export const ClearIconContainer = styled.div`
  right: 0;
  ${IconContainer}  
`
