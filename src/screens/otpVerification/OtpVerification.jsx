import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  StatusBar,
  Text,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import WrapperComponent from '../../components/WrapperComponent';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import strings from '../../constants/lang';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';
import ButtonComp from '../../components/ButtonComp';
import HeaderComponent from '../../components/HeaderComponent';
import TextComp from '../../components/TextComp';
import {useSelector} from 'react-redux';
import OTPTextView from 'react-native-otp-textinput';

export default function Login({navigation}) {
  const {isDark} = useSelector(state => state.appSettings);
  const [otpInput, setOtpInput] = useState('');
  const [timer, setTimer] = useState(60);

  const input = useRef(null);
  const handleCellTextChange = async (text, i) => {
    console.log(text, i);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (timer > 0) {
        console.log('Use effect');
        setTimer(timer - 1);
      }
    }, 1000);
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [timer]);

  return (
    <WrapperComponent>
      <HeaderComponent onPress={() => navigation.goBack()} />
      <StatusBar
        backgroundColor={colors.whiteColor}
        barStyle={'light-content'}
        hidden={'true'}
      />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'margin'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{flex: 1}}>
            <View style={{flex: 0.8}}>
              <TextComp
                style={{
                  ...styles.headerStyle,
                  color: isDark ? 'white' : 'black',
                }}
                text={strings.ENTER_THE_4_DIGIT + `email@email.com`}
              />
              <TextComp
                style={styles.subHeader}
                text={`Email ` + strings.EDIT_YOUR_MOBILE}
                onPress={() => navigation.goBack()}
              />
              <OTPTextView
                ref={input}
                textInputStyle={styles.textInputContainer}
                handleTextChange={setOtpInput}
                handleCellTextChange={handleCellTextChange}
                inputCount={4}
                tintColor={colors.blueColor}
                keyboardType="numeric"
                autoFocus
              />
            </View>
            <View
              style={{justifyContent: 'flex-end', flex: 0.2, marginBottom: 20}}>
              {timer > 0 ? (
                <TextComp
                  text={strings.RESEND_IN}
                  style={{color: colors.blueColor, marginBottom: 20}}>
                  <Text>{timer}</Text>
                </TextComp>
              ) : (
                <TextComp
                  text={strings.RESEND_OTP}
                  onPress={() => console.log('Resend')}
                  style={{color: colors.blueColor, marginBottom: 20}}
                />
              )}
              <ButtonComp label={'VERIFY'} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </WrapperComponent>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: moderateScale(16),
  },
  headerStyle: {
    fontSize: textScale(24),
    fontFamily: fontFamily.regular,
    marginBottom: moderateScaleVertical(10),
  },
  subHeader: {
    marginBottom: moderateScaleVertical(40),
    fontSize: textScale(18),
    color: colors.blueColor,
  },
  textInputContainer: {
    borderColor: colors.whiteColor,
    borderWidth: 0.2,
    borderRadius: 8,
    color: colors.whiteColor,
  },
});
