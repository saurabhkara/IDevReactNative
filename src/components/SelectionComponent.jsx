import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScaleVertical, textScale} from '../styles/responsiveSize';

export default function SelectionComponent({onPress, selected, label, value}) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Text
        style={{
          ...styles.langOption,
          color: selected === value ? 'red' : 'black',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  langOption: {
    marginBottom: moderateScaleVertical(10),
    fontWeight: 'bold',
    fontSize: textScale(14),
  },
});
