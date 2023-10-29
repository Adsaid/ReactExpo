import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

export default function ListItem({ item, delHendler }) {
  return (
    <TouchableOpacity onPress={() => delHendler(item.key)}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    marginTop: 20,
    marginLeft: '20%',
    width: '60%',
  },
});
