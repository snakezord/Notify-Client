import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const ImageContainer = styled.div`
  margin: .5rem;
  margin-right: 1rem;
  padding: .5rem;
  border-radius: 50%;  

  position: relative;

  ${({focused, theme}) => {
    return focused ?
    `
    background: ${theme.colors.hoverBackground + '80'};
    cursor: pointer;    
    `
    :
    `
    &:hover{
      cursor: pointer;
      background: ${theme.colors.hoverBackground + '80'};
    }
    `
  }}
  
`
export const Image = styled.img`
  height: 2rem;
  border-radius: 50%;
`