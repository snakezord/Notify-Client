import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;  
  background: #00000099;
  backdrop-filter: blur(3px);
  z-index: 98;
`
export const NoteContainer = styled.div`
  position: absolute;
  width: 35rem;
  z-index: 99;
  top: 20%;
  left: 30%;

  display: flex;
  flex-direction: column;
  border-radius: 8px;
  
  @media screen and (max-width: 1080px) {
    left: 20%;
  }
  @media screen and (max-width: 880px) {
    left: 15%;
  }
  @media screen and (max-width: 800px) {
    left: 10%;
  }
  @media screen and (max-width: 640px) {
    left: 5%;
  }
  @media screen and (max-width: 610px) {
    left: 0;
    width: 100%;
  }
`
export const NoteHeader = styled.div`
  min-height: 3rem;
  border-radius: 8px 8px 0 0;  

  background: #323232CC;
  color: ${({theme}) => theme.colors.background};
  font-size: .8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 .5rem;
`
export const HeaderText = styled.span`
  
`
export const NoteContentContainer =styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
  border-radius: 0 0 8px 8px;
  
  transition: background .3s;
  ${({background}) => 
  `
  background: ${background + 'CC'};
  `}
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;  
  color: ${({theme}) => theme.colors.textPrimary};
  cursor: default;
`