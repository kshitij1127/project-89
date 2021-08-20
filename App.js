import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import firebase from 'firebase'

import { firebaseConfig } from './config'
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

import Loading from './screens/LoadingScreen'
import Login from './screens/LoginScreen'
import Dashboard from './screens/DashboardScreen'

var AppNavigator = createSwitchNavigator({
  Loading: Loading,
  Login: Login,
  Dashboard: Dashboard,
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component{
  render(){
    return(
      <AppContainer />
    )
  }
}