import React from 'react';
import {
  Button,
  Input,
  NativeBaseProvider,
  Stack,
  Text,
  View,
} from 'native-base';
import {TouchableOpacity} from 'react-native';

const Login = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <View
        width={'100%'}
        height="100%"
        justifyContent="center"
        alignItems="center">
        <Stack space={4} padding={10} width={'full'} maxWidth={400}>
          <Text fontWeight="bold" textAlign="center" fontSize={24}>
            Login
          </Text>
          <Input
            variant="underlined"
            borderBottomWidth={1}
            borderBottomColor="#8E6737"
            placeholder="Username or email"
            fontSize={16}
          />
          <Input
            variant="underlined"
            borderBottomWidth={1}
            borderBottomColor="#8E6737"
            placeholder="Password"
            fontSize={16}
          />
          <Button
            fontSize={16}
            marginY={3}
            height={50}
            backgroundColor="#8E6737"
            onPress={() =>
              navigation.navigate('Chat Message', {
                screen: 'Chat',
                params: {user: 'Jane'},
              })
            }>
            Login
          </Button>
          <View flexDirection="row">
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text underline> Register here</Text>
            </TouchableOpacity>
          </View>
        </Stack>
      </View>
    </NativeBaseProvider>
  );
};

export default Login;
