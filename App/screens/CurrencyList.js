import React from "react";
import { StatusBar, FlatList, View } from "react-native";

import currencies from "../data/currencies.json";
import { RowItem, RowSeparator } from "../components/RowItem";

// TODO: Handle safe area at bottom of list
export default ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: "#fff" }}>
    <StatusBar barStyle="dark-content" />
    <FlatList
      data={currencies}
      renderItem={({ item }) => (
        <RowItem
          title={item}
          onPress={() => {
            navigation.pop();
          }}
        />
      )}
      keyExtractor={item => item}
      ItemSeparatorComponent={() => <RowSeparator />}
    />
  </View>
);
