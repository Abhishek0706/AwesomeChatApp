import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';

import { autoAuthenticate } from '../redux/actions/auth';

const StartupScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(autoAuthenticate());
  }, []);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size={'large'} />
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
