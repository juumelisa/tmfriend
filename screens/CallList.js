import React from 'react';
import {
  Button,
  Input,
  NativeBaseProvider,
  Stack,
  Text,
  View,
} from 'native-base';
import {TouchableOpacity} from 'react-native';

const ChatList = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <View
        width={'100%'}
        height="100%"
        justifyContent="center"
        alignItems="center">
        <Text>Chat</Text>
      </View>
    </NativeBaseProvider>
  );
};

export default ChatList;
