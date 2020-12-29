import styled from 'styled-components';

export const HeaderContainer = styled.div`
  grid-area: head;
  width: 100%;  

  position: fixed; 
  height: 4rem;
  
  transition: background 1s;
  background: ${({theme}) => theme.colors.background + 'D9'};
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px ${({theme}) => theme.colors.borderSecondary} solid;

  ${({scroll}) => scroll ? `box-shadow: 0px 4px 8px -3px ${({theme}) => theme.colors.boxShadow};` : ``}
`
export const LeftMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 5.5rem;
  @media screen and (max-width: 710px) {
    margin-right: 1rem;
  }
`
export const LogoContainer = styled.div` 
  padding-right: .5rem;
`
export const TitleContainer = styled.div`
  text-decoration: none;  
  @media screen and (max-width: 460px) {
    display: none;
  }
`
export const Title = styled.p`    
  color: ${({theme}) => theme.colors.textPrimary};
  font-weight: 500;
  font-size: 1.3rem;
`
export const RightMenuContainer = styled.div`
  display: flex;
  align-items: center;   
`