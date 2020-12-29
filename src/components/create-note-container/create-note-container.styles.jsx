import styled from 'styled-components';

export const Container = styled.div`
  grid-area: create; 
  
  ${({headerSearchValue}) => headerSearchValue ? `` : `padding: 2rem 0;`}  
  display: flex;
  justify-content: center;  
  @media screen and (max-width: 690px) {
    padding-left: 4rem;
  }
`