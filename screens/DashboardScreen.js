import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Drawer from '../navigation/Drawer'

export default function Dashboard(){
    return(
        <NavigationContainer>
            <Drawer/>
        </NavigationContainer>
    )
}