import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import strings from '../../constants/lang';
import {useSelector, useDispatch} from 'react-redux';
import {updateUser} from '../../redux/reducers/authReducer';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Home() {
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text
        style={{
          fontFamily: 'Roboto-BlackItalic',
        }}>
        {strings.HOME}
      </Text>
      <TouchableOpacity
        onPress={() => dispatch(updateUser('Saurabh K'))}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'cyan',
          borderRadius: 15,
        }}>
        <Text>update user</Text>
      </TouchableOpacity>
      <AntDesign name="forward" size={24} color="black" />
    </View>
  );
}
