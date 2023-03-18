import {Input, Text, View} from 'native-base';
import React from 'react';
import Screen from '../components/Screen';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import EnIcon from 'react-native-vector-icons/Entypo';

const Chat = ({navigation, route: params}) => {
  return (
    <Screen>
      <View>
        <View>
          <Input
            placeholder="Search here..."
            variant={'rounded'}
            padding={3}
            fontSize={16}
            height={'50px'}
            borderColor={'#8E6737'}
          />
          <View
            position={'absolute'}
            top={0}
            right={0}
            width={'50px'}
            height={'50px'}
            justifyContent={'center'}
            alignItems={'center'}>
            <FAIcon name="search" size={24} color={'#8E6737'} />
          </View>
        </View>
        <View paddingY={'10px'}>
          <View width={'full'} flexDirection={'row'} alignItems={'center'}>
            <View width={'1/2'}>
              <Text fontSize={'20px'} fontWeight={'bold'}>
                Message (10)
              </Text>
            </View>
            <View width={'1/2'} alignItems={'flex-end'}>
              <EnIcon name="dots-three-vertical" size={18} />
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default Chat;
