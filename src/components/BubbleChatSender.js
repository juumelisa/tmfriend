import React from 'react';
const {View, Text} = require('native-base');

const BubbleChatSender = ({text, time, bub}) => {
  return (
    <View
      paddingTop={bub ? '10px' : 0}
      paddingBottom={'10px'}
      alignItems={'flex-end'}>
      <View flexDirection={'row'}>
        <View justifyContent={'flex-end'} paddingRight={2}>
          <Text fontSize={'9px'}>{time}</Text>
        </View>
        <View
          marginRight={'5px'}
          backgroundColor={'white'}
          borderRadius={'10px'}
          padding={3}
          maxWidth={'5/6'}>
          <Text color={'black'}>{text}</Text>
        </View>
        {bub && (
          <View
            height={'20px'}
            background={'white'}
            width={'10px'}
            style={{transform: 'rotate(45deg)'}}
            position={'absolute'}
            top={'-10px'}
            right={0}
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

export default BubbleChatSender;
