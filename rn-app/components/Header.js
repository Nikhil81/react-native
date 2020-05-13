import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Colors from "../constants/color";

const Header = ({ title }) => (
  <View style={styles.Header}>
    <Text style={styles.HeaderTitle}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  Header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  HeaderTitle: {
    color: "black",
    fontSize: 24,
    fontFamily: "Open-sans-bold",
  },
});

export default Header;
