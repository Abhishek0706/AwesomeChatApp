import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';

import Button from '../components/UI/Button';
import CardView from '../components/UI/CardView';
import BorderView from '../components/UI/BorderView';

const HomeScreen = ({ route, navigation }) => {
  const [roomId, setRoomId] = useState('');

  const openRoomHandler = () => {
    navigation.navigate('Chat', { roomId: roomId });
  };
  const changeRoomTextHandler = value => {
    setRoomId(value);
  };

  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <CardView>
          <View style={styles.cardViewContainer}>
            <BorderView style={styles.textContainer}>
              <TextInput
                value={roomId}
                onChangeText={changeRoomTextHandler}
                placeholder="Type a Room ID here.."
                style={styles.roomText}
              />
            </BorderView>
            <Button title="Open the Door" onPress={openRoomHandler} />
          </View>
        </CardView>
      </KeyboardAvoidingView>
    </View>
  );
};

HomeScreen.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
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
  textContainer: {
    borderRadius: 10,
    width: '60%',
  },
  roomText: {
    textAlign: 'center',
  },
});

export default HomeScreen;
