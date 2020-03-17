import React from "react";
import { StatusBar, ScrollView, View, StyleSheet } from "react-native";

import { RowItem, RowSeparator } from "../components/RowItem";

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
          <View style={[styles.icon, { backgroundColor: "#4F6D7A" }]} />
        }
      />
      <RowSeparator />
      <RowItem
        title="Orange"
        onPress={() => alert("todo!")}
        rightIcon={
          <View style={[styles.icon, { backgroundColor: "#D57A66" }]} />
        }
      />
      <RowSeparator />
      <RowItem
        title="Green"
        onPress={() => alert("todo!")}
        rightIcon={
          <View style={[styles.icon, { backgroundColor: "#00BD9D" }]} />
        }
      />
      <RowSeparator />
      <RowItem
        title="Purple"
        onPress={() => alert("todo!")}
        rightIcon={
          <View style={[styles.icon, { backgroundColor: "#9E768F" }]} />
        }
      />
      <RowSeparator />
    </ScrollView>
  </>
);
