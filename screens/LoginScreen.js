import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import firebase from 'firebase';
import * as Google from 'expo-google-app-auth';

export default class Login extends React.Component{
    isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
            var providerData = firebaseUser.providerData;
            for (var i = 0; i < providerData.length; i++) {
                if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                    providerData[i].uid === googleUser.getBasicProfile().getId()) {
                    // We don't need to reauth the Firebase connection.
                    return true;
                    // this is a bit of a hack, but we need to return true. 
                }
            }
        }
        return false;
    }

    onSignIn = (googleUser) => {
        // We need to register an Observer on Firebase Auth to make sure auth is initialized.
        var unsubscribe = firebase.auth().onAuthStateChanged(function (firebaseUser) {
            unsubscribe();
            // Check if we are already signed-in Firebase with the correct user.
            if (!this.isUserEqual(googleUser, firebaseUser)) {
                // Build Firebase credential with the Google ID token.
                var credential = firebase.auth.GoogleAuthProvider.credential(
                    googleUser.idToken,
                    googleUser.accessToken
                );
                // Sign in with credential from the Google user.
                firebase.auth().signInWithCredential(credential)
                    .then((result) => {
                        console.log("User signed in!");
                        this.props.navigation.navigate('Home');
                    })
                    .catch((error) => {
                        console.log("User sign in failed");
                    });
            } else {
                console.log("User already signed-in Firebase.");
                console.log(firebaseUser);
                this.props.navigation.navigate('Home');
            }
        });
    }

    signInWithGoogleAsync = async () => {
        try{
            const result = await Google.logInAsync({
                behaviour: "web",
                androidClientId: "136263627755-9oqvudtudb6o5c6galclk3gleng6j518.apps.googleusercontent.com",
                iosClientId: "72696421845-osrvc36bjie4264j4c0812sp5a2egqhj.apps.googleusercontent.com",
                scopes: ["profile", "email"],
            });

            if (result.type === "success") {
                this.onSignIn(result);
                return result.accessToken;
            } else {
                return {cancelled: true};
            }
        } catch (error) {
            console.log("Error: " + error);
            return {cancelled: true};
        }
    }

    render(){
        <View style={styles.container}>
            <Button onPress={() => {
                this.signInWithGoogleAsync()
            }}
            title="Sign In With Google"></Button>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});