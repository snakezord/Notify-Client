import React, { useEffect } from 'react';

import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectAuthToken, selectUserErrorMessage } from '../../redux/user/user.selectors'
import { selectNotesErrorMessage } from '../../redux/notes/notes.selectors'
import { addCollectionAsync } from "../../redux/notes/notes.actions.js";

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/global.jsx'
import light from '../../styles/themes/light.jsx'
import dark from '../../styles/themes/dark.jsx'

import useDarkMode from '../../hooks/useDarkMode.jsx'

import ActionNotification from '../action-notification'
import ToggleTheme from '../toggle-theme'
import Error from '../error'

import SignIn from '../../pages/sign-in'
import Home from '../../pages/home'

import Particles from 'react-particles-js';
import { CONFIG } from '../../pages/sign-in/ts-particle.config.js'

const App = ({ authToken, addCollectionAsync, userErrorMessage, notesErrorMessage }) => {  
  const errorMessage = notesErrorMessage ? notesErrorMessage : userErrorMessage ? userErrorMessage : null
  useEffect(() => {    
    if(authToken) {
      addCollectionAsync()
    }
  }, [addCollectionAsync, authToken])


  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === 'light' ? light : dark

  return (
    <ThemeProvider theme={themeMode}>
      <div className="app">
        <GlobalStyle />
        <Particles
          style={{position: 'fixed', top: 0, left: 0, zIndex: -1}}
          width={'100vw'}
          height={'100vh'}
          params={CONFIG}           
        />
        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
        <Switch>
          <Route path={["/", "/signin"]} render={() => errorMessage ? <Error message={errorMessage}/> : authToken ? <Home /> : <SignIn /> }/>
        </Switch>
        <ActionNotification />
      </div>
    </ThemeProvider>
  )
}

const mapStateToProps = createStructuredSelector({
  authToken: selectAuthToken,
  userErrorMessage: selectUserErrorMessage,
  notesErrorMessage: selectNotesErrorMessage
})

const mapDispatchToProps = dispatch => ({    
  addCollectionAsync: () => dispatch(addCollectionAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
