import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("Hello world");
  return (
    <View style={styles.container}>
      <Text>{outputText}!</Text>

      <Button
        title="Change Text"
        style={{ marginTop: 30 }}
        onPress={() => setOutputText("Say hello to awesomeness!")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    marginTop: 30,
    borderRadius: 10,
  },
});
