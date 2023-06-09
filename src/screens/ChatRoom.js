import React from 'react';
import {Input, Text, View} from 'native-base';
import Screen from '../components/Screen';
import {TouchableOpacity} from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import BubbleChat from '../components/BubbleChat';
import BubbleChatSender from '../components/BubbleChatSender';
import EnIcon from 'react-native-vector-icons/Entypo';

const ChatRoom = ({navigation, route: params}) => {
  return (
    <Screen
      invert={true}
      fullWidth={true}
      statusBarColor={'#8E6737'}
      backgroundColor={'#DDD6CE'}
      fixedContent={
        <View flexDirection={'row'} alignItems={'center'}>
          <View flexDirection={'row'} width={'1/2'} alignItems={'center'}>
            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
              <FaIcon name="chevron-left" size={20} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                fontSize={'18px'}
                fontWeight={'bold'}
                marginLeft={3}
                color={'white'}>
                {params.params.roomName}
              </Text>
            </TouchableOpacity>
          </View>
          <View width={'1/2'} flexDirection={'row'} justifyContent={'flex-end'}>
            <View>
              <TouchableOpacity>
                <IonIcon name="call" size={18} color={'white'} />
              </TouchableOpacity>
            </View>
            <View paddingLeft={10}>
              <TouchableOpacity>
                <EnIcon name="dots-three-vertical" size={18} color={'white'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      }
      fixedBottom={
        <View width={'full'} backgroundColor={'#DDD6CE'}>
          <Input
            variant={'rounded'}
            padding={3}
            paddingLeft={'40px'}
            paddingRight={'60px'}
            fontSize={16}
            height={'50px'}
            borderColor={'#8E6737'}
            _focus={{
              borderColor: '#8E6737',
              backgroundColor: '#DDD6CE',
            }}
          />
          <View
            position={'absolute'}
            top={0}
            right={0}
            width={'70'}
            height={'50px'}
            justifyContent={'center'}
            alignItems={'center'}>
            {/* <FAIcon name="search" size={24} color={'#8E6737'} /> */}
            {/* <Text>Hello World</Text>
             */}
            <View
              flexDirection={'row'}
              justifyContent={'center'}
              alignItems={'center'}>
              <View paddingRight={2}>
                <TouchableOpacity>
                  <IonIcon name="attach" size={20} color={'#8E6737'} />
                </TouchableOpacity>
              </View>
              <View paddingRight={1}>
                <TouchableOpacity>
                  <FaIcon name="camera" size={16} color={'#8E6737'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            position={'absolute'}
            top={0}
            height={'50px'}
            width={'50px'}
            justifyContent={'center'}
            alignItems={'center'}>
            <TouchableOpacity>
              <FaIcon name="smile-o" size={20} color={'#8E6737'} />
            </TouchableOpacity>
          </View>
        </View>
      }>
      <View paddingY={'10px'}>
        <View>
          <View padding={1}>
            <Text textAlign={'center'} fontWeight={'bold'}>
              Today
            </Text>
          </View>
          <BubbleChat bub={true} text={'How are you?'} time={'2:30 PM'} />
          <BubbleChat text={'Hello'} time={'2:30 PM'} />
          <BubbleChat
            text={'Lalala lili lulu ajkajdk ahsjd aydua mdkjd kajkdjaj'}
            time={'2:30 PM'}
          />
          <BubbleChatSender
            bub={true}
            text={'Hola hola hola'}
            time={'2:32 PM'}
          />
          <BubbleChat bub={true} text={'Annyeong'} time={'2:33 PM'} />
          <BubbleChatSender
            bub={true}
            text={'You got that James Tee daydream look in your eyes'}
            time={'2:32 PM'}
          />
          <BubbleChatSender text={'I love you'} time={'2:32 PM'} />
          <BubbleChat bub={true} text={'How are you?'} time={'2:30 PM'} />
          <BubbleChat text={'Hello'} time={'2:30 PM'} />
          <BubbleChat
            text={'Lalala lili lulu ajkajdk ahsjd aydua mdkjd kajkdjaj'}
            time={'2:30 PM'}
          />
          <BubbleChat bub={true} text={'How are you?'} time={'2:30 PM'} />
          <BubbleChat text={'Hello'} time={'2:30 PM'} />
          <BubbleChat
            text={'Lalala lili lulu ajkajdk ahsjd aydua mdkjd kajkdjaj'}
            time={'2:30 PM'}
          />
        </View>
      </View>
    </Screen>
  );
};

export default ChatRoom;
