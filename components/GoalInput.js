import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

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
        <Button title="Add" onPress={goalSendingHandler} />
        <Button title="Cancel" onPress={cancelGoalSendingHandler} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderBottomColor:
    "black", borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default GoalInput;
