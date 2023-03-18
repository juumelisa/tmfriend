import React from 'react';
import {NativeBaseProvider, Text, View} from 'native-base';

const CallList = ({navigation}) => {
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

export default CallList;
