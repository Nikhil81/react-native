import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
} from "react-native";

const goalItem = ({ title, onDelete, id }) => (
  <TouchableNativeFeedback onPress={() => onDelete(id)}>
    <View style={styles.listItem}>
      <Text>{title}</Text>
    </View>
  </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ff696c",
  },
});

export default goalItem;
