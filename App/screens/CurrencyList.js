import React, { useContext } from "react";
import { StatusBar, FlatList, View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

import currencies from "../data/currencies.json";
import { RowItem, RowSeparator } from "../components/RowItem";
import { ConversionContext } from "../util/ConversionContext";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});

// TODO: Handle safe area at bottom of list
export default ({ navigation, route = {} }) => {
  const {
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency
  } = useContext(ConversionContext);

  const params = route.params || {};
  const { isBase = true } = params;

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar barStyle="dark-content" />
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
                  <View style={[styles.icon, { backgroundColor: colors.blue }]}>
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
