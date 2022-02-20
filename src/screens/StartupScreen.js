import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { autoAuthenticate } from '../redux/actions/auth';

const StartupScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => dispatch(autoAuthenticate()), 300);
  }, []);

  return (
    <View style={styles.screen}>
      <Text>Your Data is Completely Encrypted...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default StartupScreen;
