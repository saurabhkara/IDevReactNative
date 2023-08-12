import {View, Text} from 'react-native';
import React from 'react';
import strings from '../../constants/lang';
import {useSelector} from 'react-redux';

export default function Home() {
  const {user} = useSelector(state => state.auth);
  console.log('redux data', user);

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
