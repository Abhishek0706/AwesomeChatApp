import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import StartupScreen from '../screens/StartupScreen';
import AuthScreen from '../screens/AuthScreen';
import HomeNavigator from './HomeNavigator';
import AuthStatus from '../constants/AuthStatus';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { authStatus } = useSelector(state => state.auth);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {authStatus === AuthStatus.CHECKING && (
        <Stack.Screen name={'Startup'} component={StartupScreen} />
      )}
      {authStatus === AuthStatus.LOGGEDOUT && (
        <Stack.Screen
          name={'Auth'}
          component={AuthScreen}
          options={{
            headerShown: true,
            title: 'Authenticate',
            headerStyle: {
              backgroundColor:
                Platform.OS === 'android' ? Colors.primary : 'white',
            },
            headerTintColor:
              Platform.OS === 'android' ? 'white' : Colors.primary,
            headerTitleAlign: 'center',
          }}
        />
      )}
      {authStatus === AuthStatus.LOGGEDIN && (
        <Stack.Screen name={'Home'} component={HomeNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
