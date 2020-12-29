import styled from 'styled-components'

export const ColorsContainer = styled.div`
  border: 1px ${({theme}) => theme.colors.borderSecondary} solid;
  border-top: 2px ${({theme}) => theme.colors.borderPrimary} solid;
  box-shadow: 0px 4px 8px -3px ${({theme}) => theme.colors.boxShadow};
  padding: .5rem;
  
  cursor: default;
  
  position: absolute;
  bottom: 100%;
  left: 0%;
  z-index: 1;
  background: ${({theme}) => theme.colors.background + 'D9'};

  & > div > * > * > * > * {    
    border: 1px ${({theme}) => theme.colors.borderSecondary} solid;
  }
`