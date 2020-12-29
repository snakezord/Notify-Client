import React from 'react'
import { DropDownContainer, UserInformationContainer, PhotoContainer, Image, Information,  
  SignOutContainer, SignOutButton,  } from "./user-dropdown.styles";

//import Icon from '../icon'

import { connect } from "react-redux";
import { logoutAsync } from '../../redux/user/user.actions.js'

const UserDropDown = ({ name, email, picture, logoutAsync }) => {

  return (
    <DropDownContainer >
      <UserInformationContainer>
        <PhotoContainer>
          <Image src={picture}/>
          {/* <IconContainer>
            <Icon icon='camera' size={18} containerStyles={{margin: '2px', padding: '4px', border: '1px #ced4da solid'}} description='Upload photo' />            
          </IconContainer> */}
        </PhotoContainer>
        <Information style={{fontSize: '1rem'}}>{ name }</Information>
        <Information >{ email }</Information>
      </UserInformationContainer>      
      <SignOutContainer>
        <SignOutButton onClick={() => logoutAsync()}>Sign out</SignOutButton>
      </SignOutContainer>
    </DropDownContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  logoutAsync: () => dispatch(logoutAsync()),
})

export default connect(null, mapDispatchToProps)(UserDropDown)
