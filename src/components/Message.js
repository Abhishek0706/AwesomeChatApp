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
      ]}
    >
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
    padding: 10,
  },
  messageContainerLeft: {
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0,
    backgroundColor: Colors.lightMessageBackground,
  },
  messageContainerRight: {
    alignSelf: 'flex-end',
    borderBottomRightRadius: 0,
    backgroundColor: Colors.darkMessageBackground,
  },
  text: {
    color: '#333',
    lineHeight: 25,
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
});

export default Message;
