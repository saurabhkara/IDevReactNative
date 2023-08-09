import {View, Text} from 'react-native';
import React from 'react';
import navigationStrings from '../../navigations/navigationStrings';

export default function IntialScreen({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate(navigationStrings.LOGIN)}>
        IntialScreen
      </Text>
    </View>
  );
}
