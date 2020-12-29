import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  bottom: 2%;
  left: 2%;
  
  padding: 1.5rem;

  background: rgba(0, 0, 0, .7);
  backdrop-filter: blur(3px);


  height: 4rem;
  width: 30rem;
  z-index: 100;

  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: default;

  transition: visibility linear 0.33s, opacity 0.33s linear;
  ${({hidden}) => hidden ? 
  `
  visibility: hidden;
  opacity: 0; 
  `
  :
  `  
  visibility: visible;
  opacity: 1;
  `
  }

  @media screen and (max-width: 610px) {
    width: 80%;
    margin: 0 1rem;
  }

`
export const Text = styled.div`
  font-size: 1rem;
  color: ${({theme}) => theme.colors.textWhite};
`
export const Button = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${({theme}) => theme.colors.primary};

  border-radius: 4px;
  
  margin-left: auto;
  padding: .5rem 1.5rem;
  
  &:hover{
    cursor: pointer;
    background: rgba(233, 236, 239, .05);
  }
`