import React from "react";
import { StatusBar, ScrollView, View, StyleSheet } from "react-native";

import { RowItem, RowSeparator } from "../components/RowItem";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    borderRadius: 20
  }
});

export default () => (
  <>
    <StatusBar barStyle="dark-content" />

    <ScrollView>
      <RowItem
        title="Blue"
        onPress={() => alert("todo!")}
        rightIcon={
          <View style={[styles.icon, { backgroundColor: colors.blue }]} />
        }
      />
      <RowSeparator />
      <RowItem
        title="Orange"
        onPress={() => alert("todo!")}
        rightIcon={
          <View style={[styles.icon, { backgroundColor: colors.orange }]} />
        }
      />
      <RowSeparator />
      <RowItem
        title="Green"
        onPress={() => alert("todo!")}
        rightIcon={
          <View style={[styles.icon, { backgroundColor: colors.green }]} />
        }
      />
      <RowSeparator />
      <RowItem
        title="Purple"
        onPress={() => alert("todo!")}
        rightIcon={
          <View style={[styles.icon, { backgroundColor: colors.purple }]} />
        }
      />
      <RowSeparator />
    </ScrollView>
  </>
);
