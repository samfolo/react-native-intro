import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';

import styles from './AppStyles';

import GoalItem from './components/GoalItem/GoalItem';
import GoalInput from './components/GoalInput/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddingGoal, setIsAddingGoal] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: enteredGoal }
    ]);
    setIsAddingGoal(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  }

  const cancelGoalHandler = () => setIsAddingGoal(false);

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddingGoal(true)} />
      <GoalInput visible={isAddingGoal}
        onPress={addGoalHandler}
        onCancel={cancelGoalHandler}
      />
      <FlatList 
        keyExtractor={(item, i) => item.id}
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem 
            id={itemData.item.id}
            onDelete={removeGoalHandler} 
            title={itemData.item.value}
          />
        )}
      />
    </View> 
  );
}
