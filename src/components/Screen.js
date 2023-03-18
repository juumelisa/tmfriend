import {NativeBaseProvider, ScrollView, StatusBar, View} from 'native-base';
import React from 'react';
import {Platform} from 'react-native';

const Screen = ({
  children,
  fixedContent,
  fixedBottom,
  statusBarColor,
  backgroundColor,
}) => {
  // const theme = 'Light';
  return (
    <NativeBaseProvider>
      <StatusBar
        backgroundColor={statusBarColor ? statusBarColor : 'white'}
        barStyle={'dark-content'}
      />
      {fixedContent && (
        <View
          padding={'20px'}
          backgroundColor={statusBarColor || 'white'}
          paddingTop={Platform.OS === 'ios' ? '30px' : 0}>
          {fixedContent}
        </View>
      )}
      <ScrollView
        backgroundColor={backgroundColor || 'white'}
        paddingX={'20px'}>
        <View>{children}</View>
      </ScrollView>
      {fixedBottom && (
        <View
          width={'full'}
          position={'absolute'}
          bottom={0}
          right={0}
          padding={'20px'}>
          {fixedBottom}
        </View>
      )}
    </NativeBaseProvider>
  );
};

export default Screen;
