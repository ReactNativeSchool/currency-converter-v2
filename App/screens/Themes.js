import React, { useContext } from "react";
import { StatusBar, ScrollView, View, StyleSheet } from "react-native";

import { RowItem, RowSeparator } from "../components/RowItem";
import colors from "../constants/colors";
import { ThemeContext } from "../util/ThemeContext";

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    borderRadius: 20
  }
});

export default ({ navigation }) => {
  const { changeTheme } = useContext(ThemeContext);

  const onPress = color => {
    changeTheme(color);
    navigation.popToTop();
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <ScrollView>
        <RowItem
          title="Blue"
          onPress={() => onPress(colors.blue)}
          rightIcon={
            <View style={[styles.icon, { backgroundColor: colors.blue }]} />
          }
        />
        <RowSeparator />
        <RowItem
          title="Orange"
          onPress={() => onPress(colors.orange)}
          rightIcon={
            <View style={[styles.icon, { backgroundColor: colors.orange }]} />
          }
        />
        <RowSeparator />
        <RowItem
          title="Green"
          onPress={() => onPress(colors.green)}
          rightIcon={
            <View style={[styles.icon, { backgroundColor: colors.green }]} />
          }
        />
        <RowSeparator />
        <RowItem
          title="Purple"
          onPress={() => onPress(colors.purple)}
          rightIcon={
            <View style={[styles.icon, { backgroundColor: colors.purple }]} />
          }
        />
        <RowSeparator />
      </ScrollView>
    </>
  );
};
