import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

const MessageInput = ({onPressSend}) => {
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
    <View style={styles.messageInputContainer}>
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
    </View>
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
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 25,
  },
  textInputContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 25,
  },
});

export default MessageInput;
