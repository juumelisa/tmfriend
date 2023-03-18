import {Input, Text, View} from 'native-base';
import React from 'react';
import Screen from '../components/Screen';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import EnIcon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MatCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';

const Chat = ({navigation, route: params}) => {
  return (
    <Screen
      fixedContent={
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
          <View
            width={'full'}
            flexDirection={'row'}
            alignItems={'center'}
            paddingTop={'10px'}>
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
      }
      fixedBottom={
        <View alignItems={'flex-end'}>
          <View
            backgroundColor={'#8E6737'}
            borderRadius={'30px'}
            width={'60px'}
            height={'60px'}
            justifyContent={'center'}
            alignItems={'center'}>
            <TouchableOpacity>
              <MatCIcon name="chat-plus" size={30} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      }>
      <View>
        <View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Chat Room', {roomName: 'Kim Mingyu'})
            }>
            <View flexDirection={'row'} alignItems={'center'} paddingBottom={3}>
              <View
                backgroundColor={'black'}
                borderRadius={'30px'}
                width={'60px'}
                height={'60px'}
              />
              <View paddingX={3} maxWidth={'4/6'}>
                <Text fontSize={16} fontWeight={'bold'}>
                  Kim Mingyu
                </Text>
                <Text>Lorem ipsum</Text>
              </View>
              <View
                position={'absolute'}
                top={0}
                right={0}
                alignItems={'flex-end'}
                height={'60px'}>
                <Text color={'#8E6737'}>3:03 PM</Text>
                <View
                  marginTop={2}
                  backgroundColor={'#8E6737'}
                  width={'20px'}
                  height={'20px'}
                  borderRadius={'10px'}
                  justifyContent={'center'}
                  alignItems={'center'}>
                  <Text fontSize={12} color={'white'}>
                    3
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <View flexDirection={'row'} alignItems={'center'} paddingBottom={3}>
            <View
              backgroundColor={'amber.900'}
              borderRadius={'30px'}
              width={'60px'}
              height={'60px'}
              justifyContent={'center'}
              alignItems={'center'}>
              <Text color={'white'}>SVT</Text>
            </View>
            <View paddingX={3} maxWidth={'4/6'}>
              <Text fontSize={16} fontWeight={'bold'}>
                SEVENTEEN
              </Text>
              <Text>Scoups: Ok</Text>
            </View>
            <View
              position={'absolute'}
              top={0}
              right={0}
              alignItems={'flex-end'}
              height={'60px'}>
              <Text color={'#8E6737'}>2:58 PM</Text>
              <View
                marginTop={2}
                backgroundColor={'#8E6737'}
                width={'20px'}
                height={'20px'}
                borderRadius={'10px'}
                justifyContent={'center'}
                alignItems={'center'}>
                <Text fontSize={12} color={'white'}>
                  10
                </Text>
              </View>
            </View>
          </View>
          <View flexDirection={'row'} alignItems={'center'} paddingBottom={3}>
            <View
              backgroundColor={'blue.800'}
              borderRadius={'30px'}
              width={'60px'}
              height={'60px'}
              justifyContent={'center'}
              alignItems={'center'}
            />
            <View paddingX={3} maxWidth={'4/6'}>
              <Text fontSize={16} fontWeight={'bold'}>
                Jeon Wonwoo
              </Text>
              <View flexDirection={'row'} alignItems={'center'}>
                <IonIcon name="checkmark-done" size={16} color={'blue'} />
                <Text paddingLeft={1}>Hahaha</Text>
              </View>
            </View>
            <View
              position={'absolute'}
              top={0}
              right={0}
              alignItems={'flex-end'}
              height={'60px'}>
              <Text color={'#8E6737'}>2:58 PM</Text>
            </View>
          </View>
          <View flexDirection={'row'} alignItems={'center'} paddingBottom={3}>
            <View
              backgroundColor={'amber.900'}
              borderRadius={'30px'}
              width={'60px'}
              height={'60px'}
              justifyContent={'center'}
              alignItems={'center'}>
              <Text color={'white'}>SVT</Text>
            </View>
            <View paddingX={3} maxWidth={'4/6'}>
              <Text fontSize={16} fontWeight={'bold'}>
                SEVENTEEN
              </Text>
              <Text>Scoups: Ok</Text>
            </View>
            <View
              position={'absolute'}
              top={0}
              right={0}
              alignItems={'flex-end'}
              height={'60px'}>
              <Text color={'#8E6737'}>2:58 PM</Text>
              <View
                marginTop={2}
                backgroundColor={'#8E6737'}
                width={'20px'}
                height={'20px'}
                borderRadius={'10px'}
                justifyContent={'center'}
                alignItems={'center'}>
                <Text fontSize={12} color={'white'}>
                  10
                </Text>
              </View>
            </View>
          </View>
          <View flexDirection={'row'} alignItems={'center'} paddingBottom={3}>
            <View
              backgroundColor={'amber.900'}
              borderRadius={'30px'}
              width={'60px'}
              height={'60px'}
              justifyContent={'center'}
              alignItems={'center'}>
              <Text color={'white'}>SVT</Text>
            </View>
            <View paddingX={3} maxWidth={'4/6'}>
              <Text fontSize={16} fontWeight={'bold'}>
                SEVENTEEN
              </Text>
              <Text>Scoups: Ok</Text>
            </View>
            <View
              position={'absolute'}
              top={0}
              right={0}
              alignItems={'flex-end'}
              height={'60px'}>
              <Text color={'#8E6737'}>2:58 PM</Text>
              <View
                marginTop={2}
                backgroundColor={'#8E6737'}
                width={'20px'}
                height={'20px'}
                borderRadius={'10px'}
                justifyContent={'center'}
                alignItems={'center'}>
                <Text fontSize={12} color={'white'}>
                  10
                </Text>
              </View>
            </View>
          </View>
          <View flexDirection={'row'} alignItems={'center'} paddingBottom={3}>
            <View
              backgroundColor={'amber.900'}
              borderRadius={'30px'}
              width={'60px'}
              height={'60px'}
              justifyContent={'center'}
              alignItems={'center'}>
              <Text color={'white'}>SVT</Text>
            </View>
            <View paddingX={3} maxWidth={'4/6'}>
              <Text fontSize={16} fontWeight={'bold'}>
                SEVENTEEN
              </Text>
              <Text>Scoups: Ok</Text>
            </View>
            <View
              position={'absolute'}
              top={0}
              right={0}
              alignItems={'flex-end'}
              height={'60px'}>
              <Text color={'#8E6737'}>2:58 PM</Text>
              <View
                marginTop={2}
                backgroundColor={'#8E6737'}
                width={'20px'}
                height={'20px'}
                borderRadius={'10px'}
                justifyContent={'center'}
                alignItems={'center'}>
                <Text fontSize={12} color={'white'}>
                  10
                </Text>
              </View>
            </View>
          </View>
          <View flexDirection={'row'} alignItems={'center'} paddingBottom={3}>
            <View
              backgroundColor={'amber.900'}
              borderRadius={'30px'}
              width={'60px'}
              height={'60px'}
              justifyContent={'center'}
              alignItems={'center'}>
              <Text color={'white'}>SVT</Text>
            </View>
            <View paddingX={3} maxWidth={'4/6'}>
              <Text fontSize={16} fontWeight={'bold'}>
                SEVENTEEN
              </Text>
              <Text>Scoups: Ok</Text>
            </View>
            <View
              position={'absolute'}
              top={0}
              right={0}
              alignItems={'flex-end'}
              height={'60px'}>
              <Text color={'#8E6737'}>2:58 PM</Text>
              <View
                marginTop={2}
                width={'20px'}
                height={'20px'}
                borderRadius={'10px'}
                justifyContent={'center'}
                alignItems={'center'}
              />
            </View>
          </View>
          <View flexDirection={'row'} alignItems={'center'} paddingBottom={3}>
            <View
              backgroundColor={'amber.900'}
              borderRadius={'30px'}
              width={'60px'}
              height={'60px'}
              justifyContent={'center'}
              alignItems={'center'}>
              <Text color={'white'}>SVT</Text>
            </View>
            <View paddingX={3} maxWidth={'4/6'}>
              <Text fontSize={16} fontWeight={'bold'}>
                SEVENTEEN
              </Text>
              <Text>Scoups: Ok</Text>
            </View>
            <View
              position={'absolute'}
              top={0}
              right={0}
              alignItems={'flex-end'}
              height={'60px'}>
              <Text color={'#8E6737'}>2:58 PM</Text>
              <View
                width={'20px'}
                height={'20px'}
                borderRadius={'10px'}
                justifyContent={'center'}
                alignItems={'center'}
              />
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default Chat;
