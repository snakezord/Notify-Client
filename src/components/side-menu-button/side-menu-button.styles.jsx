import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const ButtonContainer = styled(Link)`
  display: flex;
  border-radius: 0 1rem 1rem 0;

  text-decoration: none;

  align-items: center;
  cursor: pointer;
    
  &:hover{        
    background: ${({theme}) => theme.colors.hoverBackground};
    @media screen and (max-width: 870px) {
      background: none;
    }
  }
`
export const ButtonText = styled.span`
  font-size: .9rem;
  font-weight: 500;
  margin: 0 1rem;
  color: ${({theme}) => theme.colors.textPrimary};
`