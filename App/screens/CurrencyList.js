import React, { useContext } from "react";
import { StatusBar, FlatList, View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useSafeArea } from "react-native-safe-area-context";

import currencies from "../data/currencies.json";
import { RowItem, RowSeparator } from "../components/RowItem";
import { ConversionContext } from "../util/ConversionContext";
import colors from "../constants/colors";
import { ThemeContext } from "../util/ThemeContext";

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ({ navigation, route = {} }) => {
  const {
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency
  } = useContext(ConversionContext);
  const { themeColor } = useContext(ThemeContext);
  const insets = useSafeArea();

  const params = route.params || {};
  const { isBase = true } = params;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        paddingBottom: insets.bottom
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          let selected = false;
          if (isBase && item === baseCurrency) {
            selected = true;
          } else if (!isBase && item === quoteCurrency) {
            selected = true;
          }

          return (
            <RowItem
              title={item}
              onPress={() => {
                if (isBase) {
                  setBaseCurrency(item);
                } else {
                  setQuoteCurrency(item);
                }
                navigation.pop();
              }}
              rightIcon={
                selected && (
                  <View style={[styles.icon, { backgroundColor: themeColor }]}>
                    <Entypo name="check" size={20} color={colors.white} />
                  </View>
                )
              }
            />
          );
        }}
        keyExtractor={item => item}
        ItemSeparatorComponent={() => <RowSeparator />}
      />
    </View>
  );
};
