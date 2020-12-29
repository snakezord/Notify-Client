import styled, { css } from 'styled-components'

const IconContainer = css`
  position: absolute;
  z-index: 1;  
  visibility: visible;
  transition: opacity 0.3s ease-out;
`
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin: 0 1rem;
  margin-bottom: 1rem;

  border: 1px ${({theme}) => theme.colors.borderSecondary} solid;
  border-radius: .5rem;

  max-width: 100%;

  ${({isDragging, theme}) => isDragging ? 
  `
  box-shadow: 5px 5px 5px ${theme.colors.boxShadowSecondary + '99'};
  zoom: 1.03;
  ` : ``
  }
  
  &:hover {
    border: 1px ${({theme}) => theme.colors.borderSecondary} solid;
    border-top: 2px ${({theme}) => theme.colors.borderPrimary} solid;
    box-shadow: 0px 4px 8px -3px ${({theme}) => theme.colors.boxShadow};
  }
  
  & >*:not(:first-child) {
    ${({hovered}) => hovered ? 
      `
      visibility: visible;
      opacity: 100%;
      `
      :
      `
      visibility: none;
      opacity: 0;
      `
    }
    @media screen and (max-width: 1024px) {
      visibility: visible;
      opacity: 100%;
    } 
  }
  ${({headerListView}) => headerListView ?
  `
  width: 35rem;
  `
  :
  `
  width: 15rem;
  `
  }  
  transition: background .3s;
  ${({background}) => 
  `
  background: ${background}B3;
  `}
  @media screen and (max-width: 610px) {
    width: 95%;
    margin-left: 1rem;
    margin-right: 1rem;
  }  
`
export const NoteContainer = styled.div`    
  display: flex;
  flex-direction: column;
`
export const PinIconContainer = styled.div`
  right: -10px;
  top: -10px;
  ${IconContainer}
`
export const CompleteIconContainer = styled.div`
  left: -25px;
  top: -25px;
  ${IconContainer}
`
export const DragIconContainer = styled.div`
  top: -12px;
  right: 45%;  
  ${IconContainer}
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column; 
  color: ${({theme}) => theme.colors.textSecondary};
  cursor: default;
`
export const Title = styled.div`
  font-weight: 500;
  font-size: 1.15rem;
  margin: 1rem;
  margin-bottom: 0;
  padding-right: 1rem;
`
export const DescriptionContent = styled.div`
  font-weight: 400;
  font-size: .95rem;  
  margin: 1rem;
  margin-top: .4rem;
  margin-bottom: 0;
  white-space: pre-line;
`
export const EmptyContainer = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-size: 1.5rem;  
  font-weight: 500;
  color: ${({theme}) => theme.colors.textSecondary};
  cursor: text;
`