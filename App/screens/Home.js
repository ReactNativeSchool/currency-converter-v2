import React from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  Text,
  TouchableOpacity
} from "react-native";
import { ConversionInput } from "../components/ConversionInput";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F6D7A",
    justifyContent: "center"
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25
  },
  textHeader: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20
  },
  inputContainer: {
    marginBottom: 10
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20
  },
  buttonIcon: {
    marginRight: 10,
    width: 30,
    height: 30
  },
  buttonText: {
    fontSize: 16,
    color: "#fff"
  },
  text: {
    fontSize: 14,
    color: "#fff",
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
        <View style={styles.inputContainer}>
          <ConversionInput
            text="USD"
            value="100"
            onButtonPress={() => alert("todo!")}
          />
          <ConversionInput
            text="GBP"
            value="77.10"
            editable={false}
            onButtonPress={() => alert("todo!")}
          />
        </View>
        <Text style={styles.text}>
          1 USD = 0.77096 GBP as of March 15, 2020
        </Text>
        <TouchableOpacity onPress={() => alert("todo!")} style={styles.button}>
          <Image
            source={require("../assets/images/reverse.png")}
            style={styles.buttonIcon}
            resizeMode="contain"
          />
          <Text style={styles.buttonText}>Reverse Currencies</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}
