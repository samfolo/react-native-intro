import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './GoalItemStyles';

const GoalItem = props => {
  return (
  <TouchableOpacity onPress={() => props.onDelete(props.id)}>
    <View style={styles.listItem}>
      <Text>
        {props.title}
      </Text>
    </View>
  </TouchableOpacity>
  );
}

export default GoalItem;
