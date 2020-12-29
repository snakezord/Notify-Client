import styled from 'styled-components'

export const Container = styled.div`
  & > * { 
    padding: 1rem;
    background: inherit;
    resize: none;

    font-size: 1.05rem;
    color: ${({theme}) => theme.colors.textSecondary};

    padding-bottom: 0;

    width: 100%;
    height: 100%;
    border: none;
    &:focus {      
      outline: none;
    }    
  }
`

