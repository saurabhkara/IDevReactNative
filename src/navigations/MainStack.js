import React from 'react';
import * as Screen from '../screens/index.js';
import navigationStrings from './navigationStrings.js';
import TabRoute from './TabRoute.js';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.TAB_ROUTES}
        component={TabRoute}
        options={{headerShown: false}}
      />
    </>
  );
}
