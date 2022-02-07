import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';

import Button from '../components/UI/Button';
import CardView from '../components/UI/CardView';
import { login } from '../redux/actions/auth';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(login());
  };

  return (
    <View style={styles.screen}>
      <CardView>
        <View style={styles.cardViewContainer}>
          <Button title="Login" onPress={loginHandler} />
        </View>
      </CardView>
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
  cardViewContainer: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default LoginScreen;
