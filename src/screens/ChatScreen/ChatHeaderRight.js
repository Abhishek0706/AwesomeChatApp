import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Colors from '../../constants/Colors';
import TouchableIcon from '../../components/UI/TouchableIcon';
import { logout } from '../../redux/actions/auth';
import AddRoomModal from '../../components/AddRoomModal';
import ChooseRoomModal from '../../components/ChooseRoomModal';

const ChatHeaderRight = () => {
  const [addRoomModalVisible, setAddRoomModalVisible] = useState(false);
  const [chooseRoomModalVisible, setChooseRoomModalVisible] = useState(false);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.headerRightContainer}>
      <TouchableIcon
        name={'add-outline'}
        onPress={() => setAddRoomModalVisible(true)}
        size={25}
        color={Colors.onPrimary}
      />
      <TouchableIcon
        name={'list-outline'}
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
      <AddRoomModal
        visible={addRoomModalVisible}
        setVisible={setAddRoomModalVisible}
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
