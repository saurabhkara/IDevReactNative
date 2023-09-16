import React from 'react';
import {Dimensions, Platform, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

export default function ModalComp({
  children,
  isVisible = false,
  onBackdropPress = () => {},
  style = {},
}) {
  const deviceWidth = Dimensions.get('window').width;

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      style={{...styles.style, ...style}}>
      {children}
    </Modal>
  );
}
const styles = StyleSheet.create({
  style: {},
});
