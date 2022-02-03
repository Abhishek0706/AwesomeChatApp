import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const CardView = props => {
  return <View style={styles.cardView}>{props.children}</View>;
};

CardView.propTypes = {
  children: PropTypes.node,
};

const styles = StyleSheet.create({
  cardView: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 6,
  },
});

export default CardView;
