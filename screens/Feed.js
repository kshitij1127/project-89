import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  SafeAreaView,
} from "react-native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { FlatList } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

import PostCard from "./PostCard";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

let posts = require("../temp_posts.json");  

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async loadFonts() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  renderItem = ({ item: card }) => {
    return <PostCard card={card} navigation={this.props.navigation}/>;
  };

  keyExtractor = (item, index) => {
    index.toString();
  };

  render() {
    if (!this.state.fontsLoaded) {
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
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Spectagram</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={posts}
              renderItem={this.renderItem}
            />
          </View>
          <View style={{ flex: 0.08 }}></View>
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
  cardContainer: { flex: 1 },
});
