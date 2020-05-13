import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddGoal, setIsAddGoal] = useState(false);

  const addhandler = (enteredText) => {
    setCourseGoal((curretnGoal) => [
      ...curretnGoal,
      { key: Math.random().toString(), value: enteredText },
    ]);
    setIsAddGoal(false);
  };
  const setAddItemVisble = () => {
    setIsAddGoal(true);
  };
  const onDeleteHandler = (id) => {
    const courses = [...courseGoal];
    const selectedCourse = courses.filter((item) => item.key !== id);
    setCourseGoal(selectedCourse);
  };

  const cancelGoalHandler = () => {
    setIsAddGoal(false);
  };
  return (
    <View style={styles.container}>
      <Button title="Add Goal" onPress={setAddItemVisble} />
      <GoalInput
        isVisible={isAddGoal}
        addhandler={addhandler}
        cancelGoal={cancelGoalHandler}
      />
      <FlatList
        data={courseGoal}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={onDeleteHandler}
            title={itemData.item.value}
            id={itemData.item.key}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    height: "100%",
  },
});
