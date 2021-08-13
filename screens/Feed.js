import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  Platform,
  StatusBar,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import PostCard from "./PostCard";

let posts = require("../temp_posts.json");

export default class Feed extends React.Component {
  keyExtractor = (item, index) => {
    index.toString();
  };

  renderItem = ({ item: card }) => {
    return <PostCard card={card} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
    
        <View style={styles.appTitle}>
        <View style={styles.appTitleTextContainer}>
          <Text style={styles.appTitleText}>Spectagram</Text>
        </View>

          <View style={styles.appIcon}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.iconImage}
            />
          </View>
        </View>
        <View style={styles.cardContainer}>
          <FlatList
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            data={posts}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },

  appTitle: {
    flex: 1,
    flexDirection: "row",
  },

  appIcon: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },

  appTitleTextContainer: {
    flex: 1,
    justifyContent: "center",
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
  },
});
