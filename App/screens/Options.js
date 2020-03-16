import React from "react";
import { Button } from "react-native";

export default ({ navigation }) => (
  <Button title="To Themes" onPress={() => navigation.push("Themes")} />
);
