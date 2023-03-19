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
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '622221729205-i7al3j8jmmkt79uaa2r5crnbj63a24ss.apps.googleusercontent.com',
});
const Login = ({navigation}) => {
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();
  // useEffect(() => {
  //   const onAuthStateChanged = users => {
  //     setUser(users);
  //     if (initializing) {
  //       setInitializing(false);
  //     }
  //   };
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, [initializing]);
  const onGoogleButtonPress = async () => {
    try {
      console.log('A');
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      console.log('B');
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();
      console.log('ID TOKEN: ', idToken);
      console.log('C');
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      console.log('D');
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (err) {
      console.log('ERROR NIH');
      console.log(err);
      return err;
    }
  };
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
          <Button
            onPress={() =>
              onGoogleButtonPress().then(value =>
                navigation.navigate('Chat Message', {
                  screen: 'Setting',
                  params: {
                    userInfo: {
                      isNewUser: value.additionalUserInfo.isNewUser,
                      uid: value.user.uid,
                      photoURL: value.user.photoURL,
                      displayName: value.user.displayName,
                      email: value.user.email,
                    },
                  },
                }),
              )
            }>
            Login With Google
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
