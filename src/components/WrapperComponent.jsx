import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

export default function WrapperComponent({children, style}) {
  return (
    <View style={{...styles.container, ...style}}>
      <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#373837',
    flex: 1,
  },
});
