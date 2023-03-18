import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
// const Tab = createMaterialTopTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Forgot Password"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Authentication"
          component={AuthStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
