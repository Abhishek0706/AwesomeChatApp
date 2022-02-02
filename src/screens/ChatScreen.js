import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';

import MessageInput from '../components/MessageInput';
import Message from '../components/Message';

const ChatScreen = () => {
  const [messages, setMessage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('YoutubeChatRoom')
      .onSnapshot(querySnapshot => {
        const messages = [];
        querySnapshot.forEach(dataSnapshot => {
          messages.push({
            id: dataSnapshot.id,
            value: dataSnapshot.data().message,
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
      firestore().collection('YoutubeChatRoom').doc(new Date().toString()).set({
        message: message,
      });
    }
  };

  const flatListItemRenderer = itemData => {
    return (
      <View style={styles.messageContainer}>
        <Message message={itemData.item.value} />
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 5,
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
