import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';
import TouchableIcon from './UI/TouchableIcon';
import { logout } from '../redux/actions/auth';
import ChooseRoomModal from './ChooseRoomModal';

const ChatHeaderRight = () => {
  const [chooseRoomModalVisible, setChooseRoomModalVisible] = useState(false);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.headerRightContainer}>
      <TouchableIcon
        name={'search-outline'}
        onPress={() => setChooseRoomModalVisible(true)}
        size={25}
        color={Colors.onPrimary}
      />
      <TouchableIcon
        name={'log-out-outline'}
        onPress={logoutHandler}
        size={25}
        color={Colors.accent}
      />
      <ChooseRoomModal
        visible={chooseRoomModalVisible}
        setVisible={setChooseRoomModalVisible}
      />
    </View>
  );
};

ChatHeaderRight.propTypes = {
  openRoom: PropTypes.func,
};

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: 'row',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textContainer: {
    borderRadius: 10,
    width: '60%',
    marginBottom: 20,
  },
  roomText: {
    textAlign: 'center',
  },
});

export default ChatHeaderRight;
