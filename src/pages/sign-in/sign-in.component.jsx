import React from 'react'
import { setToken } from '../../API/api.utils.js'

import { Container } from './sign-in.styles'
import { GoogleLogin } from 'react-google-login'
import WithSpinner from '../../components/with-spinner'

import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { signInWithGoogleAsync, getUserAsync } from '../../redux/user/user.actions.js'
import { selectIsFetching } from '../../redux/user/user.selectors.js'
import Cookies from 'js-cookie'

const SignIn = ({ signInWithGoogleAsync, getUserAsync }) => {
  
  const responseGoogle = async response => { 
    const sessionToken = Cookies.get('authToken')
    if(sessionToken) {
      setToken(sessionToken)
      getUserAsync(sessionToken)
    }
    else {
      const { tokenId } = await response
      if(tokenId) signInWithGoogleAsync(tokenId)
    }
  }

  return (
    <Container >
           
      <GoogleLogin
        clientId="453554487997-jact340aibie5td0co3tdesi5cku6dd1.apps.googleusercontent.com"
        className='google'
        buttonText="Signin with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={Cookies.get('authToken')}
      />
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({  
  signInWithGoogleAsync: tokenId => dispatch(signInWithGoogleAsync(tokenId)),
  getUserAsync: sessionToken => dispatch(getUserAsync(sessionToken))
})

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithSpinner
)(SignIn)