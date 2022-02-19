import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import StartupScreen from '../screens/StartupScreen';
import AuthScreen from '../screens/AuthScreen';
import AuthStatus from '../constants/AuthStatus';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import ChatScreen from '../screens/ChatScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { authStatus } = useSelector(state => state.auth);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {authStatus === AuthStatus.CHECKING && (
        <Stack.Screen name={'Startup'} component={StartupScreen} />
      )}
      {authStatus === AuthStatus.LOGGEDOUT && (
        <Stack.Screen name={'Auth'} component={AuthScreen} />
      )}
      {authStatus === AuthStatus.LOGGEDIN && (
        <Stack.Screen
          name={'Chat'}
          component={ChatScreen}
          options={screenOptions}
        />
      )}
    </Stack.Navigator>
  );
};

const screenOptions = {
  headerShown: true,
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
};

export default RootNavigator;
