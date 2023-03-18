import React from 'react';
import {
  NativeBaseProvider,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'native-base';

const Contact = ({navigation, route: params}) => {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor={'#8E6737'} />
      <View position={'absolute'} top={0}>
        <Text>Hello World</Text>
      </View>
      <ScrollView>
        <View
          width={'100%'}
          height="100%"
          justifyContent="center"
          alignItems="center">
          <Text>Chat</Text>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Contact;
