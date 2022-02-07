import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { Platform, StyleSheet } from 'react-native';

import DoorScreen from '../screens/Home/DoorScreen';
import ChatScreen from '../screens/Home/ChatScreen';
import Colors from '../constants/Colors';
import Button from '../components/UI/Button';
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
          <Button
            title="Logout"
            onPress={logoutHandler}
            style={styles.logoutButtonContainer}
          />
        ),
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android'
              ? Colors.primaryColor
              : Colors.secondaryColor,
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : 'black',
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
  logoutButtonContainer: {
    backgroundColor: Colors.logoutButton,
  },
});

export default HomeNavigator;
