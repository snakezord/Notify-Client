import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: grid;  
  
  grid-template-rows: 4rem max-content min-content;
  grid-template-columns: min-content 1fr;
  grid-template-areas: "head head"
                       "side create"
                       "side notes"
`