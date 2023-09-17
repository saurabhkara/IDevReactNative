import {Text, StyleSheet} from 'react-native';
import React from 'react';
import fontFamily from '../constants/fontFamily';
import colors from '../constants/colors';
import {textScale} from '../styles/responsiveSize';
import {useSelector} from 'react-redux';

export default function TextComp({text = '', style = {}, children, onPress}) {
  const {isDark} = useSelector(state => state.appSettings);

  return (
    <Text
      onPress={onPress}
      style={{
        ...styles.text,
        color: isDark ? colors.whiteColor : colors.blackColor,
        ...style,
      }}>
      {text}
      {children}
    </Text>
  );
}
const styles = StyleSheet.create({
  text: {
    fontFamily: fontFamily.regular,
    color: colors.whiteColor,
    fontSize: textScale(12),
  },
});
