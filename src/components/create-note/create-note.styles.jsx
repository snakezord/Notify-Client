import styled from 'styled-components';

export const NoteContainer = styled.div`
  
  width: 35rem;

  max-width: 95%;

  position: relative;
  border-radius: .5rem;
  border: 1px ${({theme}) => theme.colors.borderSecondary} solid;
  border-top: 2px ${({theme}) => theme.colors.borderPrimary} solid;
  box-shadow: 0px 4px 8px -3px ${({theme}) => theme.colors.boxShadow};

  transition: background .3s;
  ${({background}) => 
  `
  background: ${background}B3;
  `}

  display: flex;  
  align-items: flex-start;
  @media screen and (max-width: 610px) {
    width: 95%;
    margin: 0 1rem 0 0;
  }
`
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
`
export const Input = styled.input`  
  padding: 1rem;
  background: inherit;
  border: none;
  height: 100%;

  font-weight: 500;
  font-size: 1.1rem; 
  letter-spacing: 1px; 

  &:focus{
    outline: none;
  }  
`
export const PinIconContainer = styled.div`
  position: absolute;
  z-index: 1;  
  visibility: visible;
  transition: opacity 0.3s ease-out;
  top: 0;
  right: 0;
`
