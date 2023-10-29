import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Header from './component/Header';
import ListItem from './component/ListItem';
import Form from './component/Form';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Button,
  Alert,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';

export default function App() {
  //const hadleTextPress = () => console.log('press');
  //const handleButtonPress = () =>
  //  Alert.alert('Alert', 'Button', [{ text: 'Yes' }, { text: 'No' }]);
  //const handleButtonPress2 = () =>
  //  Alert.prompt('Alert', 'Button', (text) => console.log(text));

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <Text style={styles.text} onPress={hadleTextPress}>
  //       My app!
  //     </Text>
  //     <Button
  //       title="Press the button"
  //       color="black"
  //       onPress={handleButtonPress}
  //     />
  //     <Button
  //       title="Press the button"
  //       color="black"
  //       onPress={handleButtonPress2}
  //     />
  //     <Image source={require('./assets/icon.png')} />
  //     <TouchableWithoutFeedback onPress={hadleTextPress}>
  //       <Image
  //         blurRadius={0.5}
  //         source={{
  //           width: 200,
  //           height: 200,
  //           uri: 'https://img.freepik.com/free-photo/a-girl-with-pink-hair-and-a-guitar-on-her-shirt_1340-32655.jpg?w=2000',
  //         }}
  //       />
  //     </TouchableWithoutFeedback>
  //     <StatusBar style="auto" />
  //   </SafeAreaView>
  // );

  const [listOfItems, setListOfItems] = useState([
    { text: 'buy a milk', key: '1' },
    { text: 'wash a car', key: '2' },
    { text: 'clear the house', key: '3' },
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(5) },
        ...list,
      ];
    });
  };

  const delHendler = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItems) => listOfItems.key != key);
    });
  };

  return (
    <View style={{ width: '100%' }}>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem item={item} delHendler={delHendler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
