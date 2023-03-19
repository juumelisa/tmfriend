import {Image, Text, View} from 'native-base';
import React from 'react';
import Screen from '../components/Screen';
import EnIcon from 'react-native-vector-icons/Entypo';
// import {TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
const Setting = ({navigation, route: params}) => {
  console.log(params);
  return (
    <Screen backgroundColor={'#DDD6CE'}>
      <View
        flexDirection={'row'}
        alignItems={'center'}
        padding={3}
        backgroundColor={'#8E6737'}
        borderRadius={'10px'}
        marginTop={3}>
        <Image
          source={{
            uri: params.params.userInfo.photoURL,
          }}
          alt={params.params.userInfo.displayName}
          width={'70px'}
          height={'70px'}
          borderRadius={'35px'}
        />
        <View paddingLeft={3}>
          <Text fontWeight={'bold'} fontSize={'18px'} color={'white'}>
            {params.params.userInfo.displayName}
          </Text>
          <Text color={'white'}>{params.params.userInfo.email}</Text>
        </View>
        <View position={'absolute'} top={0} right={0} padding={3}>
          <EnIcon name="edit" size={20} color={'white'} />
        </View>
      </View>
    </Screen>
  );
};

export default Setting;
