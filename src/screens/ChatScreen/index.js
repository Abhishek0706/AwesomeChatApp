import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import MessageInput from '../../components/MessageInput';
import Message from '../../components/Message';
import { Encrypt, Decrypt } from '../../utils/aes';
import Colors from '../../constants/Colors';
import ChatHeaderRight from './ChatHeaderRight';
import ChatHeaderLeft from './ChatHeaderLeft';

const ChatScreen = ({ route, navigation }) => {
  const [messages, setMessage] = useState([]);
  const [loading, setLoading] = useState(true);

  const { userId, token } = useSelector(state => state.auth);
  const roomId = useSelector(state => state.chat).currentRoomId || 'General';

  useLayoutEffect(() => {
    navigation.setOptions({
      title: roomId,
      headerRight: () => <ChatHeaderRight />,
      headerLeft: () => <ChatHeaderLeft />,
    });
  }, [roomId]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection(`ChatRooms/${roomId}/messages`)
      .onSnapshot(querySnapshot => {
        const messages = [];
        querySnapshot.forEach(dataSnapshot => {
          messages.push({
            id: dataSnapshot.id,
            message: dataSnapshot.data().message,
            userId: dataSnapshot.data().userId,
          });
        });
        setMessage(messages.reverse());
        setLoading(false);
      });

    return () => {
      unsubscribe();
    };
  }, [roomId]);

  const sendMessageHandler = message => {
    if (message) {
      firestore()
        .collection(`ChatRooms/${roomId}/messages`)
        .doc(moment().format('YYYY-MM-DD-HH-mm-sssss'))
        .set({
          message: Encrypt(message),
          userId: userId,
        });
    }
  };

  const flatListItemRenderer = itemData => {
    const isOwner = itemData.item.userId === userId;

    return (
      <View style={styles.messageContainer}>
        <Message message={Decrypt(itemData.item.message)} isOwner={isOwner} />
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.centeredView}>
        <ActivityIndicator size={'large'} color={Colors.primary} />
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
    backgroundColor: Colors.background,
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
    backgroundColor: 'white',
  },
});

export default ChatScreen;
