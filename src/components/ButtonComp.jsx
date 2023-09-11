import {Text, StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import React from 'react';
import fontFamily from '../constants/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../styles/responsiveSize';

export default function ButtonComp({
  label,
  buttonStyle = {},
  leftImg = null,
  textStyle = {},
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.button, ...buttonStyle}}
      activeOpacity={0.5}>
      {!leftImg ? <View /> : <Image source={leftImg} />}
      <Text style={{...styles.text, ...textStyle}}>{label}</Text>
      <View />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    alignItems: 'center',
    height: moderateScaleVertical(52),
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(16),
  },
  text: {
    fontFamily: fontFamily.regular,
    color: 'white',
    fontSize: textScale(16),
  },
});
