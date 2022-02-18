import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const TouchableText = ({ title, onPress, textStyle, containerStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

TouchableText.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  textStyle: PropTypes.object,
  containerStyle: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default TouchableText;
