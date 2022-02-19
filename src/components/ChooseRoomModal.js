import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Modal,
  Platform,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import BorderView from './UI/BorderView';
import Button from '../components/UI/Button';
import { setCurrentRoomId } from '../redux/actions/chat';

const ChooseRoomModal = ({ visible, setVisible }) => {
  const [roomId, setRoomId] = useState('');

  const dispatch = useDispatch();

  const openRoomHandler = () => {
    if (roomId !== '') {
      dispatch(setCurrentRoomId(roomId));
    }
    setRoomId('');
    setVisible(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <TouchableWithoutFeedback onPress={() => setVisible(false)}>
        <View style={styles.screen}>
          <TouchableWithoutFeedback>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.modalView}>
              <BorderView style={styles.textContainer}>
                <TextInput
                  value={roomId}
                  onChangeText={setRoomId}
                  onSubmitEditing={openRoomHandler}
                  placeholder="Room ID"
                />
              </BorderView>
              <Button title="GO" onPress={openRoomHandler} />
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

ChooseRoomModal.propTypes = {
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

export default ChooseRoomModal;
