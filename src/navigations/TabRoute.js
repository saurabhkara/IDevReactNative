import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import navigationStrings from './navigationStrings';
import * as Screen from '../screens/index.js';

const Tab = createBottomTabNavigator();

export default function () {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={navigationStrings.HOME}
        component={Screen.Home}
        //   options={{
        //     tabBarIcon:({})=>{
        //         return()
        //     }
        //   }}
      />
      <Tab.Screen name={navigationStrings.PROFILE} component={Screen.Profile} />
      <Tab.Screen name={navigationStrings.SEARCH} component={Screen.Search} />
      <Tab.Screen
        name={navigationStrings.CREATE_POST}
        component={Screen.CreatePost}
      />
    </Tab.Navigator>
  );
}
