import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Loading extends React.Component{
    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.props.navigation.navigate('Dashboard')
            } else {
                this.props.navigation.navigate('Login')
            }
        })
    }

    componentDidMount(){
        this.checkIfLoggedIn()
    }

    render(){
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})