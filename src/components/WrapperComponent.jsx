import {View, StyleSheet, SafeAreaView, useColorScheme} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import {useSelector} from 'react-redux';

export default function WrapperComponent({children, style}) {
  const {isDark} = useSelector(state => state.appSettings);
  console.log('Dark Theme', isDark);
  return (
    <View
      style={{
        ...styles.container,
        ...style,
        backgroundColor: isDark ? colors.blackColor : colors.whiteColor,
      }}>
      <SafeAreaView style={styles.safeAreaView}>{children}</SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.themeColor,
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
});
