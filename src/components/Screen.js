import {NativeBaseProvider, ScrollView, StatusBar, View} from 'native-base';
import React from 'react';
import {Platform} from 'react-native';

const Screen = ({children, fixedContent, fixedBottom}) => {
  // const theme = 'Light';
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View
        padding={'20px'}
        backgroundColor={'white'}
        paddingTop={Platform.OS === 'ios' ? '40px' : 0}>
        {fixedContent}
      </View>
      <ScrollView paddingX={'20px'} backgroundColor={'white'}>
        <View>{children}</View>
      </ScrollView>
      <View position={'absolute'} bottom={0} right={0} padding={'20px'}>
        {fixedBottom}
      </View>
    </NativeBaseProvider>
  );
};

export default Screen;
