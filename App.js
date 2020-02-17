import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddingGoal, setIsAddingGoal] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: enteredGoal }
    ]);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddingGoal(true)} />
      <GoalInput visible={isAddingGoal} onPress={addGoalHandler} />
      <FlatList 
        keyExtractor={(item, i) => item.id}
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem 
            id={itemData.item.id}
            onDelete={removeGoalHandler} 
            title={itemData.item.value} />
        )}
      />
    </View> 
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
