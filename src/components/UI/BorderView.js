import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const BorderView = ({ style, ...props }) => {
  return <View style={[styles.box, style]}>{props.children}</View>;
};

BorderView.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
  },
});

export default BorderView;
