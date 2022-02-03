import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';
import DeviceInfo from 'react-native-device-info';
import PropTypes from 'prop-types';

import MessageInput from '../components/MessageInput';
import Message from '../components/Message';

const ChatScreen = ({ route, navigation }) => {
  const [messages, setMessage] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = DeviceInfo.getUniqueId();

  let roomId = route.params.roomId;
  if (!roomId) roomId = 'General';

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: roomId,
    });
  }, []);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection(roomId)
      .onSnapshot(querySnapshot => {
        const messages = [];
        querySnapshot.forEach(dataSnapshot => {
          messages.push({
            id: dataSnapshot.id,
            value: dataSnapshot.data().message,
            userId: dataSnapshot.data().userId,
          });
        });
        setMessage(messages.reverse());
        setLoading(false);
      });

    return () => {
      unsubscribe();
    };
  }, []);

  const sendMessageHandler = message => {
    if (message) {
      firestore()
        .collection(roomId)
        .doc(moment().format('YYYY-MM-DD-hh-mm-sssss'))
        .set({
          message: message,
          userId: userId,
        });
    }
  };

  const flatListItemRenderer = itemData => {
    const isOwner = itemData.item.userId === userId;

    return (
      <View style={styles.messageContainer}>
        <Message message={itemData.item.value} isOwner={isOwner} />
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.centeredView}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  } else {
    return (
      <View style={styles.screen}>
        <View style={styles.listContainer}>
          <FlatList
            data={messages}
            renderItem={flatListItemRenderer}
            inverted={true}
          />
        </View>
        <MessageInput onPressSend={sendMessageHandler} />
      </View>
    );
  }
};
ChatScreen.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 5,
    backgroundColor: 'white',
  },
  messageContainer: {
    marginVertical: 2,
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatScreen;
