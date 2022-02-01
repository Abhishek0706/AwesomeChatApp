import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const App = () => {
  const [userData, setUserData] = useState('Subscribe to spidermonkey');

  useEffect(() => {
    const unsubcribe = firestore()
      .collection('Users')
      .doc('user1')
      .onSnapshot(data => {
        setUserData(JSON.stringify(data._data));
      });

    return () => {
      unsubcribe();
    };
  }, []);

  return (
    <View style={styles.screen}>
      <Text>{userData}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
