import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Drawer from './navigation/Drawer'

export default class App extends React.Component{
  render(){
    return (
      <NavigationContainer>
         <Drawer />
      </NavigationContainer>
    )
  }
}