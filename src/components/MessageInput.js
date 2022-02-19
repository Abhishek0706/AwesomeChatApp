import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import BorderView from './UI/BorderView';
import Colors from '../constants/Colors';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

const MessageInput = ({ onPressSend }) => {
  const [message, setMessage] = useState('');

  const changeTextHandler = value => {
    setMessage(value);
  };

  const submitMessageHandler = () => {
    if (message) {
      // return value
      onPressSend(message);
      setMessage('');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <BorderView style={styles.messageInputContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            value={message}
            placeholder="Type Message"
            onChangeText={changeTextHandler}
            onSubmitEditing={submitMessageHandler}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={submitMessageHandler}>
          <Icon name="send" size={25} color={'black'} />
        </TouchableOpacity>
      </BorderView>
    </KeyboardAvoidingView>
  );
};

MessageInput.propTypes = {
  onPressSend: PropTypes.func,
};

const styles = StyleSheet.create({
  messageInputContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  textInputContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 25,
  },
});

export default MessageInput;
