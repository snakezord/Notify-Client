import styled from 'styled-components';

export const SideMenuContainer = styled.div`
  grid-area: side;   

  transition: background 1s, width .15s;
  background: ${({theme}) => theme.colors.background + '99'};
  backdrop-filter: blur(3px);

  width: 4rem;
  min-height: 40rem;
  display: flex;
  flex-direction: column;  
  overflow: hidden;
  

  ${({headerMenuOpen}) => headerMenuOpen ? 
  `
  position: sticky;
  top: 64px;
  height: 50vh;
  width: 18rem;
  @media screen and (max-width: 870px) {
    width: 12rem;
  }
  @media screen and (max-width: 500px) {
    position: fixed;
    top: 64px;
    height: 60vh;
    z-index: 5;    
  }
  `
  : 
  `
  position: fixed;
  top: 64px;
  height: 60vh;
  z-index: 5;
  `
  }  
    
  &:hover {    
    transition-delay: .3s;
    
    width: 18rem;
    box-shadow: 1px 0 5px 2px ${({theme}) => theme.colors.borderPrimary};
    
    @media screen and (max-width: 870px) {
      width: 3.5rem;
    }   
  }  
`
