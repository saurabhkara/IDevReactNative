import React from 'react';
import navigationStrings from './navigationStrings';
import * as Screen from '../screens/index.js';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.INITIAL_SCREEN}
        component={Screen.InitialScreen}
      />
      <Stack.Screen name={navigationStrings.LOGIN} component={Screen.Login} />
      <Stack.Screen name={navigationStrings.SIGNUP} component={Screen.SignUp} />
      <Stack.Screen
        name={navigationStrings.OTP_VERIFICATION}
        component={Screen.OtpVerification}
      />
    </>
  );
}
