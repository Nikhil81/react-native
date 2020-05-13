import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/color";
import BodyText from "./BodyText";

const NumberContainer = ({ children }) => (
  <View style={styles.selectedNumner}>
    <BodyText style={styles.textStyle}>{children}</BodyText>
  </View>
);

const styles = StyleSheet.create({
  selectedNumner: {
    borderColor: Colors.primary,
    borderRadius: 30,
    borderWidth: 1,
    borderStyle: "dotted",
    backgroundColor: "#e5fef4",
    width: "15%",
    height: "15%",
    minHeight: 50,
    justifyContent: "space-around",
    marginVertical: 2,
  },
  textStyle: {
    fontSize: 20,
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
  },
});
export default NumberContainer;
