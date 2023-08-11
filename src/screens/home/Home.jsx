import {View, Text} from 'react-native';
import React from 'react';
import strings from '../../constants/lang';

export default function Home() {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text
        style={{
          fontFamily: 'Roboto-BlackItalic',
        }}>
        {strings.HOME}
      </Text>
    </View>
  );
}
