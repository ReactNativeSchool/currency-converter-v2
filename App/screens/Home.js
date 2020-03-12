import React from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  Text
} from "react-native";
import { ConversionInput } from "../components/ConversionInput";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F6D7A"
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  logoBackground: {
    width: screen.width / 2,
    height: screen.width / 2
  },
  logo: {
    position: "absolute",
    width: screen.width / 3,
    height: screen.width / 3
  },
  textHeader: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center"
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        {/* TODO: Can this just be one image? */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/background.png")}
            style={styles.logoBackground}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.textHeader}>Currency Converter</Text>
        <ConversionInput text="USD" />
        <ConversionInput text="GBP" />
      </SafeAreaView>
    </View>
  );
}
