import React from "react";
import { View, StyleSheet } from "react-native";

const card = ({ children, style }) => (
  <View style={{ ...styles.card, ...style }}>{children}</View>
);

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { widht: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 9,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});
export default card;
