import React, { useState } from 'react';
import { View, TextInput, Button, Modal } from 'react-native';

import styles from './GoalInputStyles';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const goalSendingHandler = () => {
    props.onPress(enteredGoal);
    setEnteredGoal('');
  }

  const cancelGoalSendingHandler = () => {
    props.onCancel()
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Course Goal" 
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <View style={styles.inputButtons}>
          <View style={styles.button}>
            <Button title="Add" onPress={goalSendingHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={cancelGoalSendingHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;
