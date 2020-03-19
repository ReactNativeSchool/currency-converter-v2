import React, { useState, useContext } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemeContext } from "../util/ThemeContext";
import { ConversionContext } from "../util/ConversionContext";
import { ConversionInput } from "../components/ConversionInput";
import { Button } from "../components/Button";
import colors from "../constants/colors";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue
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
    color: colors.white,
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
    color: colors.white,
    textAlign: "center"
  }
});

// TODO: Handle keyboard
export default ({ navigation }) => {
  const {
    baseCurrency,
    quoteCurrency,
    date,
    isLoading,
    swapCurrencies,
    rates
  } = useContext(ConversionContext);
  const { themeColor } = useContext(ThemeContext);

  const [value, setValue] = useState("100");
  const conversionRate = rates[quoteCurrency];

  return (
    <View style={[styles.container, { backgroundColor: themeColor }]}>
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push("Options")}>
            <Entypo name="cog" size={32} color={colors.white} />
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
              style={[styles.logo, { tintColor: themeColor }]}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.textHeader}>Currency Converter</Text>
          {isLoading ? (
            <ActivityIndicator color={colors.white} size="large" />
          ) : (
            <>
              <View style={styles.inputContainer}>
                <ConversionInput
                  text={baseCurrency}
                  value={value}
                  onButtonPress={() =>
                    navigation.push("CurrencyList", {
                      title: "Base Currency",
                      isBase: true
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
                    value &&
                    `${(parseFloat(value) * conversionRate).toFixed(2)}`
                  }
                  editable={false}
                  onButtonPress={() =>
                    navigation.push("CurrencyList", {
                      title: "Quote Currency",
                      isBase: false
                    })
                  }
                />
              </View>
              <Text style={styles.text}>
                {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${date}`}
              </Text>
              <Button
                text="Reverse Currencies"
                onPress={() => swapCurrencies()}
              />
            </>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};
