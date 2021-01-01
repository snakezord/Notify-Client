import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;  
`
export const MainContainer = styled.div`
  transition: background 1s, border 1s;
  background: ${({theme}) => theme.colors.gradient};
  width: 30rem;
  height: 90vh;
  border: 1px ${({theme}) => theme.colors.borderSecondary} solid;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 560px) {
    width: 90%;
  } 
`
export const LogoContainer = styled.div`
  margin: 1rem 0;
`
export const Description = styled.div`    
  margin: 0 4rem;
  line-height: 2rem;
  font-size: 1.5rem;
  color: ${({theme}) => theme.colors.textPrimary};
`
export const ButtonContainer = styled.div`
  margin-bottom: 5rem;
`
