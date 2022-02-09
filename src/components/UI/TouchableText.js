import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const TouchableText = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

TouchableText.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 12,
    fontStyle: 'italic',
  },
});

export default TouchableText;
