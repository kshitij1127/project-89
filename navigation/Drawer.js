import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Profile from '../screens/Profile';
import StackNavigator from './StackNavigation';

const DrawerNavigator = createDrawerNavigator()

const Drawer = () => {
    return(
        <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen name="Home" component={StackNavigator} />
            <DrawerNavigator.Screen name="Profile" component={Profile} />
        </DrawerNavigator.Navigator>
    )
}

export default Drawer;