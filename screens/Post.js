import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default class Post extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Post A Picture</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});