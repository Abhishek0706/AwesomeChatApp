import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import ModalCard from './UI/ModalCard';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentRoomId } from '../redux/actions/chat';

const ChooseRoomModal = ({ visible, setVisible }) => {
  const dispatch = useDispatch();
  const { roomIdList } = useSelector(state => state.chat);

  const listItemRendere = itemData => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          dispatch(setCurrentRoomId(itemData.item));
          setVisible(false);
        }}>
        <Text style={styles.itemText}>{itemData.item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ModalCard
      visible={visible}
      onRequestClose={() => setVisible(false)}
      onPressOutside={() => setVisible(false)}>
      <FlatList
        style={styles.list}
        data={roomIdList}
        renderItem={listItemRendere}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </ModalCard>
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
    aspectRatio: 1,
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
  list: {
    height: '100%',
    width: '100%',
  },
  listContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    width: '100%',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    padding: 5,
  },
  itemText: {
    textAlign: 'center',
    fontSize: 16,
  },
  seperator: {
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
});

export default ChooseRoomModal;
