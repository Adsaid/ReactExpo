import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>List of tasks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    //paddingTop: 60,
    height: 60,
    backgroundColor: 'silver',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});
