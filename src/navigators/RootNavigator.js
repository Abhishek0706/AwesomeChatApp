import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import StartupScreen from '../screens/StartupScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeNavigator from './HomeNavigator';
import LoginStatus from '../constants/LoginStatus';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { loginStatus } = useSelector(state => state.auth);
  // const loginStatus = LoginStatus.CHECKING;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {loginStatus === LoginStatus.CHECKING && (
        <Stack.Screen name={'Startup'} component={StartupScreen} />
      )}
      {loginStatus === LoginStatus.LOGGEDOUT && (
        <Stack.Screen name={'Login'} component={LoginScreen} />
      )}
      {loginStatus === LoginStatus.LOGGEDIN && (
        <Stack.Screen name={'Home'} component={HomeNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
