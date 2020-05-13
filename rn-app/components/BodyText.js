import React from "react";
import { Text, StyleSheet } from "react-native";

const bodyText = ({ children, style }) => (
  <Text style={{ ...styles.body, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  body: {
    fontFamily: "Open-sans",
    textAlign: "center",
  },
});

export default bodyText;
