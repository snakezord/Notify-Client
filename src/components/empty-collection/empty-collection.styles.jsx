import styled from 'styled-components'

export const Container = styled.div`
  grid-area: notes;
  
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
`
export const Message = styled.div`
  color: ${({theme}) => theme.colors.textPrimary};
  font-size: 1.5rem;
`