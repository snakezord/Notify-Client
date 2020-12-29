import styled from 'styled-components'

export const DropDownContainer = styled.div`
  position: absolute;
  cursor: default;
  top: 100%;
  right: 0;
  min-width: 20rem;
  padding-right: .5rem;
  border-radius: .5rem;
  border: 1px ${({theme}) => theme.colors.borderSecondary} solid;
  border-top: 2px ${({theme}) => theme.colors.borderPrimary} solid;
  box-shadow: 0px 4px 8px -3px ${({theme}) => theme.colors.boxShadow};
  z-index: 1;
  margin-right: .5rem;
  background: ${({theme}) => theme.colors.background};

  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:last-child) {
    border-bottom: 1px ${({theme}) => theme.colors.borderSecondary} solid;    
  }
  & > *{
    padding: 1rem 0;
    width: 100%;
  }
`
export const UserInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem 0;
`
export const PhotoContainer = styled.div`
  position: relative;
  border-radius: 50%;
  margin-bottom: .5rem;
`
export const IconContainer = styled.div`
  position: absolute;
  
  border-radius: 50%;
  top: 60%;
  right: -10px;
  background: ${({theme}) => theme.colors.background};
`
export const Image = styled.img`
  height: 5rem;
  border-radius: 50%;
`
export const Information = styled.span`
  cursor: text;
  font-size: .8rem;
  color: ${({theme}) => theme.colors.textPrimary};
  font-weight: 500;
`
export const SignOutContainer = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center;
`
export const SignOutButton = styled.button`
  background: ${({theme}) => theme.colors.background};
  border: 1px ${({theme}) => theme.colors.borderSecondary} solid;
  border-radius: 5px;
  padding: .5rem 1rem;
  cursor: pointer;
  color: ${({theme}) => theme.colors.textPrimary};
  font-size: 1rem;
  &:hover{
    background: ${({theme}) => theme.colors.hoverBackground};
  }
  &:focus{
    outline: none;
  }
`