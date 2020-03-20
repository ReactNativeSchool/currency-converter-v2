import React, { useContext } from "react";
import { StatusBar, ScrollView, Linking, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";
import { ThemeContext } from "../util/ThemeContext";
import { RowItem, RowSeparator } from "../components/RowItem";

const openLink = url =>
  Linking.openURL(url).catch(() =>
    Alert.alert("Sorry, something went wrong.", "Please try again later.")
  );

export default ({ navigation }) => {
  const { themeColor } = useContext(ThemeContext);
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <ScrollView>
        <RowItem
          title="Themes"
          onPress={() => navigation.push("Themes")}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={themeColor} />
          }
        />
        <RowSeparator />
        <RowItem
          title="React Native Basics"
          onPress={() =>
            openLink(
              "https://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter"
            )
          }
          rightIcon={<Entypo name="export" size={20} color={themeColor} />}
        />
        <RowSeparator />
        <RowItem
          title="React Native by Example"
          onPress={() => openLink("https://reactnativebyexample.com")}
          rightIcon={<Entypo name="export" size={20} color={themeColor} />}
        />
      </ScrollView>
    </>
  );
};
