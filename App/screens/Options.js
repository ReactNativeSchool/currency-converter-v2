import React from "react";
import { StatusBar, ScrollView, Linking, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { RowItem, RowSeparator } from "../components/RowItem";
import colors from "../constants/colors";

const openLink = url =>
  Linking.openURL(url).catch(() =>
    Alert.alert("Sorry, something went wrong.", "Please try again later.")
  );

export default ({ navigation }) => (
  <>
    <StatusBar barStyle="dark-content" />

    <ScrollView>
      <RowItem
        title="Themes"
        onPress={() => navigation.push("Themes")}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={colors.blue} />
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
        rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
      />
      <RowSeparator />
      <RowItem
        title="React Native by Example"
        onPress={() => openLink("https://reactnativebyexample.com")}
        rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
      />
    </ScrollView>
  </>
);
