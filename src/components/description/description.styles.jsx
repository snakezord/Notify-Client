import styled from 'styled-components'

export const DescriptionContainer = styled.div`
  position: absolute;

  cursor: text;
  
  width: min-content;
  background: rgba(0,0,0,.7);
  top: 100%;
  right: 0;
  
  z-index: 15;
  border-radius: 4px; 
  letter-spacing: 1.5px;

  display: flex;
  ${({name, email}) => {
    return (name || email) ? 
    `
    padding: .4rem; 
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    `
    :
    `
    left: 0;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    & > * {
      padding: 4px;
    }
    `
  }}    
`
export const DescriptionContent = styled.span`  
  font-size: .7rem;
  font-weight: 500;
  color: ${({theme}) => theme.colors.primary};
`