import styled from 'styled-components'

export const Container = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Message = styled.div`
  font-size: 2rem;
  font-weight: 500;
  color: ${({theme}) => theme.colors.textPrimary}; 
`