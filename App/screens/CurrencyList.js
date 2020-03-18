import React from "react";
import { StatusBar, FlatList, View } from "react-native";

import currencies from "../data/currencies.json";
import { RowItem, RowSeparator } from "../components/RowItem";

// TODO: Handle safe area at bottom of list
export default ({ navigation, route = {} }) => {
  const params = route.params || {};
  const { onPress = () => {} } = params;

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={currencies}
        renderItem={({ item }) => (
          <RowItem
            title={item}
            onPress={() => {
              onPress(item);
              navigation.pop();
            }}
          />
        )}
        keyExtractor={item => item}
        ItemSeparatorComponent={() => <RowSeparator />}
      />
    </View>
  );
};
