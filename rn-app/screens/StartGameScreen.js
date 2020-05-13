import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Image,
} from "react-native";

import Colors from "../constants/color";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";

const StartGames = ({ gameStartHandler }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [confirmed, setConfirmed] = useState(false);

  const enteredNumberValidation = (inputEntered) => {
    setEnteredNumber(inputEntered.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chossenNumner = parseInt(enteredNumber);
    if (isNaN(chossenNumner) || chossenNumner <= 0 || chossenNumner > 99) {
      Alert.alert("Invalid number", "Number has to be within 1 to 99", [
        {
          text: "Okay",
          style: "destructive",
        },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chossenNumner);
    setEnteredNumber("");
    Keyboard.dismiss();
  };

  let confirmedNumber;
  if (confirmed) {
    confirmedNumber = (
      <Card style={styles.summaryScreen}>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPressHandler={() => gameStartHandler(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <BodyText>Select a Number</BodyText>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={enteredNumberValidation}
            value={enteredNumber}
          />
          <View style={styles.ButtonContainer}>
            <View style={styles.ButtonReset}>
              <Button
                title="Reset"
                color={Colors.accent}
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.ButtonConfirm}>
              <Button
                title="Confirm"
                color={Colors.primary}
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedNumber}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#fef7f1",
  },
  ButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ButtonReset: {
    width: "35%",
  },
  ButtonConfirm: {
    width: "35%",
    marginLeft: 10,
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
    fontFamily: "Open-sans-bold",
  },
  inputContainer: {
    justifyContent: "space-around",
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    height: "40%",
  },
  input: {
    width: 50,
    textAlign: "center",
    fontSize: 36,
    height: "50%",
  },
  summaryScreen: {
    marginTop: 20,
    height: "20%",
    minHeight: 150,
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
});

export default StartGames;
