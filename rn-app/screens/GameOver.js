import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";

import Card from "../components/Card";
import Colors from "../constants/color";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";

const gameOver = ({ text, onRestartGame }) => (
  <Card>
    <BodyText>{text}</BodyText>
    <View style={styles.imageContainer}>
      <Image
        // source={require("../assets/success.png")}
        source={{
          uri:
            "https://cdn.clipart.email/b667a7de6c617a6c0018833f0326190c_trophy-golden-download-free-image-winner-png-clipart-1779270-_880-856.jpeg",
        }}
        style={styles.image}
        resizeMode="stretch"
      />
    </View>

    <MainButton onPressHandler={onRestartGame}>Restart</MainButton>
  </Card>
);

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderWidth: 2,
    borderRadius: 150,
    borderColor: "rgba(0,0,0,0.1)",
    width: 300,
    height: 300,
    overflow: "hidden",
    margin: 30,
  },
});
export default gameOver;
