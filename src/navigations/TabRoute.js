import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import navigationStrings from './navigationStrings';
import * as Screen from '../screens/index.js';
import AntDesign from 'react-native-vector-icons/AntDesign';

const renderICon = (name, focused) => {
  return (
    <AntDesign name={name} size={24} color={focused ? 'green' : 'black'} />
  );
};

const Tab = createBottomTabNavigator();

export default function () {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'red',
      }}>
      <Tab.Screen
        name={navigationStrings.HOME}
        component={Screen.Home}
        options={{
          tabBarIcon: ({focused, color}) => {
            return renderICon('home', focused);
          },
        }}
      />

      <Tab.Screen
        name={navigationStrings.SEARCH}
        component={Screen.Search}
        options={{
          tabBarIcon: ({focused}) => {
            return renderICon('search1', focused);
          },
        }}
      />

      <Tab.Screen
        name={navigationStrings.CREATE_POST}
        component={Screen.CreatePost}
        options={{
          tabBarIcon: ({focused}) => {
            return renderICon('profile', focused);
          },
        }}
      />

      <Tab.Screen
        name={navigationStrings.PROFILE}
        component={Screen.Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return renderICon('user', focused);
          },
        }}
      />
    </Tab.Navigator>
  );
}
