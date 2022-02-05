import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import ChatScreen from '../screens/ChatScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';

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
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android'
                ? Colors.primaryColor
                : Colors.secondaryColor,
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : 'black',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
