import styled from 'styled-components'

export const IconContainer = styled.div`
  margin: .5rem;
  padding: .5rem;
  border-radius: 50%;

  position: relative;

  ${({ active, icon, color, activeSideMenuButton, theme }) => active === activeSideMenuButton ? 
  `background: ${theme.colors.primary};
  & > * > * {       
    fill: #000;
  }
  `
  :
  `
  & > * > * {       
    ${color ? `fill: ${color};` : `${theme.colors.textPrimary + '80'}`}
  }
  &:hover{
    cursor: pointer;
    background: ${theme.colors.hoverBackground + '80'};
    & > div {
      visibility: visible;
    }
    & > * > * {
      transition: fill .3s ease-out;
      ${icon === 'camera' ? `fill: #4dabf7;` : `fill: #000;`}      
    }
  }
  @media screen and (max-width: 610px) {
    ${icon === 'gridView' || icon === 'listView' ? `display: none;` : ``}
  }
  `}  
`
export const SpinnerContainer = styled.div`
  margin: 0 1rem;
  
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid rgba(73, 80, 87, 1);
  border-radius: 50%;
  border-right-color: ${({theme}) => theme.colors.primary};
  animation: spin .8s ease-in-out infinite;
  -webkit-animation: spin .8s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;