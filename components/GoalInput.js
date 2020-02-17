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

const styles = StyleSheet.create({
  inputContainer: {
    flex: 10,
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
  inputButtons: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 15,
  },
  button: {
    width: '45%',
  }
});

export default GoalInput;
