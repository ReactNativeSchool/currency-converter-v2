import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    borderRadius: 5
  },
  button: {
    padding: 15,
    borderRightColor: "#E2E2E2",
    borderRightWidth: 1
  },
  buttonText: {
    fontSize: 18,
    color: "#4F6D7A",
    fontWeight: "bold"
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16
  }
});

export const ConversionInput = ({ text, onButtonPress, ...props }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onButtonPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
    <TextInput style={styles.input} {...props} />
  </View>
);
