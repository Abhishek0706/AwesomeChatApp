import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const Message = ({ message, isOwner }) => {
  return (
    <View
      style={[
        styles.messageContainer,
        isOwner ? styles.messageContainerRight : styles.messageContainerLeft,
      ]}>
      <Text style={[styles.text, isOwner ? styles.textRight : styles.textLeft]}>
        {message}
      </Text>
    </View>
  );
};

Message.propTypes = {
  message: PropTypes.string,
  isOwner: PropTypes.bool,
};

const styles = StyleSheet.create({
  messageContainer: {
    maxWidth: '80%',
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  messageContainerLeft: {
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0,
    backgroundColor: Colors.recievedMessageBackground,
  },
  messageContainerRight: {
    alignSelf: 'flex-end',
    borderBottomRightRadius: 0,
    backgroundColor: Colors.sentMessageBackground,
  },
  text: {
    lineHeight: 25,
  },
  textLeft: {
    textAlign: 'left',
    color: 'black',
  },
  textRight: {
    textAlign: 'right',
    color: Colors.onPrimary,
  },
});

export default Message;
