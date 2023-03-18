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

const Register = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <View
        width={'100%'}
        height="100%"
        justifyContent="center"
        alignItems="center">
        <Stack space={4} padding={10} width={'full'} maxWidth={400}>
          <Text fontWeight="bold" textAlign="center" fontSize={24}>
            Register
          </Text>
          <Input
            variant="underlined"
            borderBottomWidth={1}
            borderBottomColor="#8E6737"
            placeholder="Email"
            fontSize={16}
            type="text"
          />
          <Input
            variant="underlined"
            borderBottomWidth={1}
            borderBottomColor="#8E6737"
            placeholder="Username"
            fontSize={16}
          />
          <Input
            variant="underlined"
            borderBottomWidth={1}
            borderBottomColor="#8E6737"
            placeholder="Password"
            fontSize={16}
            type="password"
          />
          <Input
            variant="underlined"
            borderBottomWidth={1}
            borderBottomColor="#8E6737"
            placeholder="Confirm password"
            fontSize={16}
            type="password"
          />
          <Button
            fontSize={16}
            marginY={3}
            height={50}
            backgroundColor="#8E6737">
            Register
          </Button>
          <View flexDirection="row">
            <Text>Have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text underline> Login here</Text>
            </TouchableOpacity>
          </View>
        </Stack>
      </View>
    </NativeBaseProvider>
  );
};

export default Register;
