import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../styles/responsiveSize';
import fontFamily from '../constants/fontFamily';
import colors from '../constants/colors';

export default function TextInputComp({
  value = '',
  onChangeText,
  placeholder = '',
  secureTextEntry = false,
  onPressSecure = () => {},
  inputStyle = {},
  placeholderTextColor = colors.whiteColorOpacity70,
  textStyle = {},
  secureText,
  ...props
}) {
  return (
    <View style={{...styles.inputStyle, ...inputStyle}}>
      <TextInput
        style={{...textStyle, ...styles.textStyle}}
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        {...props}
      />
      {!!secureText ? (
        <Text style={{...styles.textStyle, flex: 0}} onPress={onPressSecure}>
          {secureText}
        </Text>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  inputStyle: {
    paddingHorizontal: moderateScale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: moderateScale(52),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    backgroundColor: colors.gray2,
    marginBottom: moderateScaleVertical(20),
  },
  textStyle: {
    fontSize: textScale(14),
    fontFamily: fontFamily.regular,
    flex: 1,
    color: colors.whiteColor,
  },
});
