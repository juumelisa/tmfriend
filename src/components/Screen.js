import {NativeBaseProvider, ScrollView, StatusBar, View} from 'native-base';
import React from 'react';
import {Platform} from 'react-native';

const Screen = ({
  children,
  fixedContent,
  fixedBottom,
  statusBarColor,
  backgroundColor,
  invert,
  fullWidth,
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
          paddingTop={Platform.OS === 'ios' ? '50px' : 0}>
          {fixedContent}
        </View>
      )}
      <ScrollView
        backgroundColor={backgroundColor || 'white'}
        paddingX={'20px'}
        style={invert ? {transform: [{scaleY: -1}]} : {}}
        // marginTop={invert ? 0 : '60px'}
        paddingBottom={invert ? '60px' : 0}
        marginBottom={invert ? '60px' : 0}>
        <View style={invert ? {transform: [{scaleY: -1}]} : {}}>
          {children}
        </View>
      </ScrollView>
      {fixedBottom && (
        <View
          width={fullWidth ? 'full' : '60px'}
          backgroundColor={backgroundColor || ''}
          position={'absolute'}
          bottom={0}
          right={0}
          paddingX={'20px'}
          paddingBottom={'20px'}>
          {fixedBottom}
        </View>
      )}
    </NativeBaseProvider>
  );
};

export default Screen;
