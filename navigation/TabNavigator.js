import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import Post from "../screens/Post";
import Ionicons from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route === "Feed") {
            iconName = focused ? "ios-home-outline" : "ios-home";
          } else if (route === "Post") {
            iconName = focused ? "ios-paper-outline" : "ios-add";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#ff0000",
        inactiveTintColor: "#FF5349",
      }}
    >
      <Tab.Screen name="Feed" component={Feed}/>
      <Tab.Screen name="Post" component={Post}/>
    </Tab.Navigator>
  );
};


export default BottomTabNavigator;


