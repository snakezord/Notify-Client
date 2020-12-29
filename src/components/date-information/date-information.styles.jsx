import styled from 'styled-components'
export const Information = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;  
  align-self: flex-end;
  margin: 1rem;
  margin-bottom: 0;
  padding: .5rem;
  border: 1px ${({theme}) => theme.colors.textSecondary + '99'} solid;
  border-radius: 10px;
  font-size: .7rem;
  width: max-content;
  color: ${({theme}) => theme.colors.textPrimary};
`