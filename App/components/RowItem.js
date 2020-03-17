import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff"
  },
  title: {
    color: "#343434",
    fontSize: 16
  },
  separator: {
    backgroundColor: "#E2E2E2",
    height: StyleSheet.hairlineWidth,
    flex: 1,
    marginLeft: 20
  }
});

export const RowItem = ({ onPress, title, rightIcon = null }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

export const RowSeparator = () => <View style={styles.separator} />;
