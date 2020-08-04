import React from "react";
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";
import { RowItem, RowSeparator } from "../components/RowItem";
import { useTheme } from "../util/Theme";

const COLOR_OPTIONS = [
  {
    text: "Blue",
    color: colors.blue,
  },
  {
    text: "Orange",
    color: colors.orange,
  },
  {
    text: "Green",
    color: colors.green,
  },
  {
    text: "Purple",
    color: colors.purple,
  },
];

const styles = StyleSheet.create({
  icon: {
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ({ navigation }) => {
  const { setThemeColor } = useTheme();

  const onPress = (color) => {
    setThemeColor(color);
    navigation.popToTop();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <ScrollView>
        {COLOR_OPTIONS.map((opt) => {
          const current = true;

          return (
            <React.Fragment key={opt.text}>
              <RowItem
                title={opt.text}
                onPress={() => onPress(opt.color)}
                rightIcon={
                  <View style={[styles.icon, { backgroundColor: opt.color }]}>
                    {current ? (
                      <Entypo name="check" size={20} color="#fff" />
                    ) : null}
                  </View>
                }
              />
              <RowSeparator />
            </React.Fragment>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
