import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import ChatScreen from '../screens/ChatScreen';
import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerBackVisible: false,
          headerStyle: {backgroundColor: Colors.headerColor},
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
