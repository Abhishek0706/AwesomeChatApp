import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet} from 'react-native';

const Message = ({message}) => {
  return (
    <View style={styles.messageContainer}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

Message.propTypes = {
  message: PropTypes.string,
};

const styles = StyleSheet.create({
  messageContainer: {
    width: '80%',
    height: 40,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderEndEndRadius: 10,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'bisque',
  },
  text: {
    color: '#333',
  },
});

export default Message;
