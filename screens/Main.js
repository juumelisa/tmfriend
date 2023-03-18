import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import {NavigationContainer} from '@react-navigation/native';
import Chat from './Chat';
import CallList from './CallList';
import {NativeBaseProvider, Text, View} from 'native-base';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

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

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#3f3f46', paddingTop: 40},
        tabBarShowLabel: true,
        tabBarActiveTintColor: 'white',
        tabBarIndicatorStyle: {backgroundColor: 'white'},
        tabBarLabelStyle: {fontWeight: 'bold'},
      }}>
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Call List" component={CallList} />
    </Tab.Navigator>
  );
};

const Main = () => {
  return (
    <NavigationContainer>
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
        {/* <Stack.Screen
          name="Authentication"
          component={AuthStack}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Chat Message"
          component={MyTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
