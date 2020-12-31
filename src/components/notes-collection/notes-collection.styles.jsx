import styled from 'styled-components'

export const Container = styled.div`
  grid-area: notes;
  padding-top: .5rem;
  ${({headerMenuOpen, headerListView}) => headerMenuOpen ? 
  ``
  : 
  `${headerListView ? 
  `@media screen and (max-width: 700px) {
    padding-left: 0;
  }
  ` 
  : `padding-left: 4rem;`}`}  
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 870px) {
    padding-bottom: 4rem;
  }
  @media screen and (max-width: 690px) {
    padding-left: 4rem;
  }
`
export const Title = styled.span`
  display: block;
  margin: 1rem 2rem;  

  ${({headerListView}) => headerListView ? 
  `align-self: center;`
  :
  ``
  }
  color: ${({theme}) => theme.colors.textPrimary};
  font-size: .8rem;
  text-transform: uppercase;
`
export const NotesContainer = styled.div`
  display: flex;  

  ${({headerListView}) => headerListView ? 
  `
  flex-direction: column;
  align-items: center;
  `
  :
  `
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  `
  }  

`