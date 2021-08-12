import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import Post from "../screens/Post";
import Ionicons from "react-native-vector-icons/Ionicons"

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { StyleSheet } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Post") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }
         return <Ionicons name={iconName} size={RFValue(13)} color={color} style={styles.icons} />;
        },
      })}
        activeTintColor = "#ff0000"
        inactiveTintColor = "#FF5349"
    >
      <Tab.Screen name="Feed" component={Feed}/>
      <Tab.Screen name="Post" component={Post}/>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute",
  },
  icons: { width: RFValue(50), height: RFValue(50) },
});



export default BottomTabNavigator;


