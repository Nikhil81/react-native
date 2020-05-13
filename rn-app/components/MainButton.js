import React, { Children } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/color";

const mainButton = ({ children, onPressHandler }) => (
  <TouchableOpacity onPress={onPressHandler}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontFamily: "Open-sans",
    fontSize: 18,
  },
});

export default mainButton;
