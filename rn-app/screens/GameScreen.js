import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import Colors from "../constants/color";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";

const generateRandomBetween = (min, max, exculde) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exculde) {
    return generateRandomBetween(min, max, exculde);
  } else {
    return randomNumber;
  }
};

const gameStart = ({ currentNumber, onReStartHandler }) => {
  const initialGusses = generateRandomBetween(1, 100, currentNumber);
  const [currentGuessNumber, setcurrentGussesNumber] = useState(initialGusses);
  const [pastGusses, setPastGuess] = useState([initialGusses]);
  const currertLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuessNumber === currentNumber) {
      onReStartHandler(pastGusses.length);
    }
  }, [currentGuessNumber, currentNumber, onReStartHandler]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "less" && currentGuessNumber < currentNumber) ||
      (direction === "more" && currentGuessNumber > currentNumber)
    ) {
      Alert.alert("Don't lie", "You know this is workng number", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
      return;
    }
    if (direction === "less") {
      currentHigh.current = currentGuessNumber;
    } else {
      currertLow.current = currentGuessNumber;
    }
    const nextnumber = generateRandomBetween(
      currertLow.current,
      currentHigh.current,
      currentGuessNumber
    );
    setcurrentGussesNumber(nextnumber);

    setPastGuess((currentGusses) => [nextnumber, ...currentGusses]);
  };
  return (
    <View style={styles.screen}>
      <BodyText>Our guess</BodyText>
      <NumberContainer>{currentGuessNumber}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPressHandler={() => nextGuessHandler("more")}>
          <Ionicons name="md-add" color="white" size={24} />
        </MainButton>
        <MainButton onPressHandler={() => nextGuessHandler("less")}>
          <Ionicons name="md-remove" color="white" size={24} />
        </MainButton>
      </Card>
      <ScrollView>
        {pastGusses.map((guess) => {
          return <Text>{guess}</Text>;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignContent: "center",
    padding: 10,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    width: 300,
    maxWidth: "80%",
  },
});
export default gameStart;
