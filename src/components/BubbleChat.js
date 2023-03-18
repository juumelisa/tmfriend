import React from 'react';
const {View, Text} = require('native-base');

const BubbleChat = ({text, time, bub}) => {
  return (
    <View paddingTop={bub ? '10px' : 0} paddingBottom={'10px'}>
      <View flexDirection={'row'}>
        <View
          marginLeft={'5px'}
          backgroundColor={'coolGray.500'}
          borderRadius={'10px'}
          padding={3}
          maxWidth={'5/6'}>
          <Text color={'white'}>{text}</Text>
        </View>
        <View justifyContent={'flex-end'} paddingLeft={2}>
          <Text fontSize={'9px'}>{time}</Text>
        </View>
        {bub && (
          <View
            height={'20px'}
            background={'coolGray.500'}
            width={'10px'}
            style={{transform: 'rotate(135deg)'}}
            position={'absolute'}
            top={'-10px'}
          />
        )}
        <View
          backgroundColor={'#DDD6CE'}
          width={'full'}
          height={'10px'}
          position={'absolute'}
          top={'-10px'}
          left={'-10px'}
        />
      </View>
    </View>
  );
};

export default BubbleChat;
