import React from 'react'
import PictureDetails from '../screens/PictureDetails';
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNavigator from './TabNavigator'

const Stack = createStackNavigator()

const StackNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Home" component={BottomTabNavigator} />
            <Stack.Screen name="PictureDetails" component={PictureDetails} />
        </Stack.Navigator>
    )
}

export default StackNavigator;