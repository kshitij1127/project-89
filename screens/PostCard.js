import React from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export default class PostCard extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}>
                        <Image source={require('../assets/profile_img.png')}/>
                    </View>

                    <View>
                        <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                    </View>
                </View>

                <Image source={require('../assets/post.jpeg')}/>
                <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>{this.props.post.caption}</Text>
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.likeButton}>
                        <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    droidSafeArea: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
    },

    appTitle: {
        flex: 0.07,
        flexDirection: 'row',
    },

    appIcon: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: 'center',
    },

    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },

    appTitleText: {
        fontSize: RFValue(28),
        coloer: "#ffffff",
    },

    cardContainer: {
        flex: 0.85,
    }
})