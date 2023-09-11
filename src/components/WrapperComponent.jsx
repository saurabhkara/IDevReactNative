import {View, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import {useSelector} from 'react-redux';

export default function WrapperComponent({children, style}) {
  const isDarkTheme = useSelector(state => state.auth);
  console.log(isDarkTheme);
  return (
    <View style={{...styles.container, ...style}}>
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
