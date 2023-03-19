import React, {useEffect, useState} from 'react';
import {
  Button,
  Input,
  NativeBaseProvider,
  Stack,
  Text,
  View,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  useEffect(() => {
    const onAuthStateChanged = users => {
      setUser(users);
      if (initializing) {
        setInitializing(false);
      }
    };
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [initializing]);

  if (!user) {
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
  } else {
    console.log(user);
    return (
      <NativeBaseProvider>
        <View
          width={'100%'}
          height="100%"
          justifyContent="center"
          alignItems="center">
          <Stack space={4} padding={10} width={'full'} maxWidth={400}>
            <Text fontWeight="bold" textAlign="center" fontSize={24}>
              Welcome, {user.email}
            </Text>
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
  }
};

export default Login;
