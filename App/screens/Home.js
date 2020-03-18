import React, { useState } from "react";
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
import { Entypo } from "@expo/vector-icons";

import { ConversionInput } from "../components/ConversionInput";
import { Button } from "../components/Button";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F6D7A"
  },
  header: {
    alignItems: "flex-end",
    marginHorizontal: 20
  },
  content: {
    position: "relative",
    flex: 1,
    paddingTop: screen.height * 0.1
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
  text: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center"
  }
});

// TODO: Handle keyboard
export default ({ navigation }) => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [quoteCurrency, setQuoteCurrency] = useState("GBP");
  const [conversionRate] = useState(0.77096);
  const [value, setValue] = useState("100");
  const [date] = useState("2020-03-18");

  const changeBase = newBase => {
    setBaseCurrency(newBase);
  };

  const changeQuote = newQuote => {
    setQuoteCurrency(newQuote);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push("Options")}>
            <Entypo name="cog" size={32} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
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
              text={baseCurrency}
              value={value}
              onButtonPress={() =>
                navigation.push("CurrencyList", {
                  title: "Base Currency",
                  onPress: currency => changeBase(currency)
                })
              }
              keyboardType="numeric"
              onChangeText={text => {
                if (text.length === 0) {
                  setValue();
                } else {
                  setValue(text);
                }
              }}
            />
            <ConversionInput
              text={quoteCurrency}
              value={
                value && `${(parseFloat(value) * conversionRate).toFixed(2)}`
              }
              editable={false}
              onButtonPress={() =>
                navigation.push("CurrencyList", {
                  title: "Quote Currency",
                  onPress: currency => changeQuote(currency)
                })
              }
            />
          </View>
          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${date}`}
          </Text>
          <Button text="Reverse Currencies" onPress={() => alert("todo!")} />
        </View>
      </SafeAreaView>
    </View>
  );
};
