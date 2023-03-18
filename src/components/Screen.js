import {NativeBaseProvider, ScrollView, StatusBar, View} from 'native-base';
import React from 'react';
import {Platform} from 'react-native';

const Screen = ({children}) => {
  // const theme = 'Light';
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ScrollView
        padding={'20px'}
        paddingTop={Platform.OS === 'ios' ? '40px' : 0}>
        <View>{children}</View>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Screen;
