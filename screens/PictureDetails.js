import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import * as Speech from "expo-speech";

let customFonts = {
  "BubbleGum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

export default class PictureDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoading: false,
    };
  }

  async loadFonts() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoading: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (!this.state.fontsLoading) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              />
            </View>
          </View>

          <View style={styles.storyContainer}>
            <ScrollView style={styles.storyCard}>
              <Image source={require("../assets/image_1.jpg")} style={styles.image} />
              <View style={styles.dataContainer}>
                <View style={styles.titleTextContainer}>
                  <Text style={styles.storyTitleText}>
                    {this.props.route.params.title}
                  </Text>

                  <Text style={styles.storyAuthorText}>
                    {this.props.route.params.author}
                  </Text>

                  <Text style={styles.storyTitleText}>
                    {this.props.route.params.description}
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#15193c" },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: { flex: 0.07, flexDirection: "row" },
  appIcon: { flex: 0.3, justifyContent: "center", alignItems: "center" },
  iconImage: { width: "100%", height: "100%", resizeMode: "contain" },
  appTitleTextContainer: { flex: 0.7, justifyContent: "center" },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
  },
  storyContainer: { flex: 1 },
  storyCard: {
    margin: RFValue(20),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20),
  },
  image: {
    width: "100%",
    alignSelf: "center",
    height: RFValue(200),
    borderTopLeftRadius: RFValue(20),
    borderTopRightRadius: RFValue(20),
    resizeMode: "contain",
  },
  dataContainer: { flexDirection: "row", padding: RFValue(20) },
  titleTextContainer: { flex: 0.8 },
  storyTitleText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    color: "white",
  },
  storyAuthorText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "white",
  },
  iconContainer: { flex: 0.2 },
  storyTextContainer: { padding: RFValue(20) },
  storyText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(15),
    color: "white",
  },
  moralText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(20),
    color: "white",
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    flexDirection: "row",
    backgroundColor: "#eb3948",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(30),
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});
