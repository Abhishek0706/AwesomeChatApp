import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { Platform, StyleSheet } from 'react-native';

import DoorScreen from '../screens/Home/DoorScreen';
import ChatScreen from '../screens/Home/ChatScreen';
import Colors from '../constants/Colors';
import TouchableText from '../components/UI/TouchableText';

import { logout } from '../redux/actions/auth';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Stack.Navigator
      initialRouteName="Door"
      screenOptions={{
        headerRight: () => (
          <TouchableText
            title="Logout"
            onPress={logoutHandler}
            textStyle={styles.logoutButton}
          />
        ),
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? Colors.primary : 'white',
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : Colors.primary,
      }}>
      <Stack.Screen
        name="Door"
        component={DoorScreen}
        options={{ title: 'Awesome Chat App' }}
      />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    color: Colors.accent,
    fontSize: 14,
  },
});

export default HomeNavigator;
