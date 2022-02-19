import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

const TouchableIcon = ({ name, size, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

TouchableIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  iconContainer: {
    marginHorizontal: 5,
  },
});

export default TouchableIcon;
