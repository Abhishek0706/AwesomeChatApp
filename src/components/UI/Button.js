import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../constants/Colors';

const Button = ({title, onPress, style, textStyle}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.buttonContainer, style]}>
        <Text style={[styles.textStyle, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.object,
  textStyle: PropTypes.object,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Button;
