import styled from 'styled-components'

export const BottomIconsContainer = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
  transition: opacity 0.3s ease-out;

  cursor: default;
  
  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`
export const Button = styled.span`
  font-size: 1rem;
  font-weight: 500;
  margin-left: auto;
  margin-right: 1rem;
  
  padding: .2rem;  

  font-size: .9rem;
  &:hover{
    cursor: pointer;
  }
`

export const DeletedIconsContainer = styled.div`
  display: flex;
  align-items: center;
  
`