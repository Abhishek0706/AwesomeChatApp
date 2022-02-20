import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import BorderView from './UI/BorderView';
import Button from './UI/Button';
import ModalCard from './UI/ModalCard';
import { setCurrentRoomId, addRoomId } from '../redux/actions/chat';

const AddRoomModal = ({ visible, setVisible }) => {
  const [roomId, setRoomId] = useState('');

  const dispatch = useDispatch();

  const openRoomHandler = () => {
    if (roomId !== '') {
      dispatch(addRoomId(roomId));
      dispatch(setCurrentRoomId(roomId));
    }
    setRoomId('');
    setVisible(false);
  };

  return (
    <ModalCard
      visible={visible}
      onRequestClose={() => setVisible(false)}
      onPressOutside={() => setVisible(false)}>
      <BorderView style={styles.textContainer}>
        <TextInput
          value={roomId}
          onChangeText={setRoomId}
          onSubmitEditing={openRoomHandler}
          placeholder="Room ID"
        />
      </BorderView>
      <Button title="ADD" onPress={openRoomHandler} />
    </ModalCard>
  );
};

AddRoomModal.propTypes = {
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // for ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // for android
    elevation: 5,
  },
  textContainer: {
    borderRadius: 10,
    width: '80%',
    marginBottom: 20,
  },
});

export default AddRoomModal;
