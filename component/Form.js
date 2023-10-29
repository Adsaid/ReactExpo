import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
  Alert,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';

export default function Form({ addHandler }) {
  const [text, setValue] = useState('');
  const onChange = (text) => {
    setValue(text);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Enter task.."
      />
      <Button
        style={styles.btn}
        title="Add a task"
        onPress={() => addHandler(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 30,
    marginHorizontal: '20%',
    width: '60%',
  },
  btn: {
    borderRadius: 5,
    width: '60%',
  },
});
