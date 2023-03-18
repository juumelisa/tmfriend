/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './Login';
import Register from './Register';
import {NavigationContainer} from '@react-navigation/native';
import Chat from './Chat';
import CallList from './CallList';
import Contact from './Contact';
import Setting from './Setting';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MatCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#C3C3BC',
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <IonIcon
                name={`${
                  focused
                    ? 'ios-chatbox-ellipses'
                    : 'ios-chatbox-ellipses-outline'
                }`}
                size={24}
                color={'#8E6737'}
              />
            );
          },
          tabBarBadge: 10,
        }}
      />
      <Tab.Screen
        name="Call List"
        component={CallList}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <IonIcon
                name={`${focused ? 'call' : 'call-outline'}`}
                size={24}
                color={'#8E6737'}
              />
            );
          },
          tabBarBadge: 10,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <MatCIcon
                name={`${focused ? 'contacts' : 'contacts-outline'}`}
                size={24}
                color={'#8E6737'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <IonIcon
                name={`${focused ? 'settings' : 'settings-outline'}`}
                size={24}
                color={'#8E6737'}
              />
            );
          },
        }}
      />
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
