import React from 'react';
import {Button, Input, NativeBaseProvider, Stack, View} from 'native-base';

const Login = () => {
  return (
    <NativeBaseProvider>
      <View
        width={'100%'}
        height="100%"
        justifyContent="center"
        alignItems="center">
        <Stack space={4} padding={10} width={'full'} maxWidth={400}>
          <Input
            variant="underlined"
            borderBottomWidth={1}
            borderBottomColor="#3f3f46"
            placeholder="Username or email"
            fontSize={16}
          />
          <Input
            variant="underlined"
            borderBottomWidth={1}
            borderBottomColor="#3f3f46"
            placeholder="Password"
            fontSize={16}
          />
          <Button fontSize={16} marginY={3} height={50} backgroundColor="#3f3f46">Login</Button>
        </Stack>
      </View>
    </NativeBaseProvider>
  );
};

export default Login;
