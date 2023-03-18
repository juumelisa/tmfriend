import React from 'react';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
const HomeScreen = () => {
  return (
    <View>
      <Text>This is Home Screen</Text>
    </View>
  );
};
HomeScreen.navigationOptions = {
  tabBarIcon: ({tintColor, focused}) => (
    // <Icon name={focused ? 'ios-home' : 'md-home'} color={tintColor} size={25} />
    <View>
      <Text>Home</Text>
    </View>
  ),
};

export default HomeScreen;
