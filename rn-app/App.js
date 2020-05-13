import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGamesScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    "Open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "Open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [noOfRound, setNoOfRound] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  const onRestartGameHanlder = () => {
    setUserNumber(null);
    setNoOfRound(0);
  };

  const restatHandler = (nofTryies) => {
    setNoOfRound(nofTryies);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGamesScreen gameStartHandler={startGameHandler} />;
  if (userNumber && noOfRound <= 0) {
    content = (
      <GameScreen currentNumber={userNumber} onReStartHandler={restatHandler} />
    );
  } else if (noOfRound > 0) {
    content = (
      <GameOver
        text={"Found it : " + userNumber + " in " + noOfRound + " Gusses!"}
        onRestartGame={onRestartGameHanlder}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Gusses the Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
