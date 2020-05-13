import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const goalInput = ({ addhandler, isVisible, cancelGoal }) => {
  const [enteredText, setEnteredText] = useState("");

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textContiner}
          placeholder="Enter something here"
          value={enteredText}
          onChangeText={setEnteredText}
        />
        <View style={styles.ButtonGroup}>
          <View style={styles.Button}>
            <Button
              title="Add"
              style={styles.successButton}
              onPress={() => {
                setEnteredText("");
                addhandler(enteredText);
              }}
            />
          </View>
          <View style={styles.Button}>
            <Button color="#ff0000" title="Cancel" onPress={cancelGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContiner: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    width: "70%",
    backgroundColor: "white",
  },

  Button: {
    width: "40%",
  },
  ButtonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%",
    marginTop: 10,
  },
});

export default goalInput;
