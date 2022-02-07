import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DoorScreen from '../screens/Home/DoorScreen';
import ChatScreen from '../screens/Home/ChatScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Door">
      <Stack.Screen
        name="Door"
        component={DoorScreen}
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

export default HomeNavigator;
