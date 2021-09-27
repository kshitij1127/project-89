import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import StackNavigator from "./StackNavigation";
import CustomSideBarMenu from "../screens/CustomSideBarMenu";

import firebase from "firebase";
import Logout from '../screens/LogoutScreen'

const DrawerNavigator = createDrawerNavigator();

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightTheme: true,
    };
  }

  componentDidMount() {
    let theme;
    firebase
      .database()
      .ref("/users/" + firebase.auth().currentUser.uid)
      .on("value", function (snapshot) {
        theme = snapshot.val().current_theme;
      });
    this.setState({
      lightTheme: theme === "light" ? true : false,
    });
  }
  render() {
    return (
      <DrawerNavigator.Navigator
        drawerContentOptions={{
          activeTintColor: "orange",
          inactiveTintColor: this.state.lightTheme ? "black" : "white",
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSideBarMenu {...props} />}
      >
        <DrawerNavigator.Screen name="Home" component={StackNavigator} options={{
            unmountOnBlur: true,
        }}/>
        <DrawerNavigator.Screen name="Profile" component={Profile} options={{
            unmountOnBlur: true, 
        }}/>
        <DrawerNavigator.Screen name="Logout" component={Logout} options={{
            unmountOnBlur: true, 
        }}/>
      </DrawerNavigator.Navigator>
    );
  }
}
