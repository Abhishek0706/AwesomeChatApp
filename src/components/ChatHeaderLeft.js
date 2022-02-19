import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ChatHeaderLeft = () => {
  return (
    <View style={{ marginRight: 10 }}>
      <Icon name={'logo-react'} size={25} color="white" />
    </View>
  );
};

export default ChatHeaderLeft;
