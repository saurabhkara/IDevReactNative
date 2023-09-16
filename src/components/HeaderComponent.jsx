import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import {useSelector} from 'react-redux';
import colors from '../constants/colors';

export default function HeaderComponent({onPress}) {
  const {isDark} = useSelector(state => state.appSettings);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={require('../assets/images/ic_back_arrow.png')}
          style={{tintColor: isDark ? colors.whiteColor : colors.blackColor}}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(16),
  },
});
