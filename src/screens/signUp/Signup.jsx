import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import WrapperComponent from '../../components/WrapperComponent';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import strings from '../../constants/lang';
import TextInputComp from '../../components/TextInputComp';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';
import ButtonComp from '../../components/ButtonComp';
import HeaderComponent from '../../components/HeaderComponent';
import {useSelector} from 'react-redux';
import TextComp from '../../components/TextComp';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import navigationStrings from '../../navigations/navigationStrings';

export default function Signup({navigation}) {
  const {isDark} = useSelector(state => state.appSettings);
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const onHandleSignUp = () => {
    navigation.navigate(navigationStrings.OTP_VERIFICATION);
  };
  return (
    <WrapperComponent>
      <HeaderComponent onPress={() => navigation.goBack()} />
      <KeyboardAwareScrollView style={styles.container}>
        <View style={{flex: 0.8}}>
          <TextComp text={strings.CREATE_ACCOUNT} style={styles.headerStyle} />
          <TextComp text={strings.CREATE_AN_ACCOUNT} style={styles.subHeader} />
          <TextInputComp
            placeholder={strings.USERNAME}
            value={userName}
            onChangeText={text => setUserName(text)}
          />
          <TextInputComp
            placeholder={strings.FULL_NAME}
            value={fullName}
            onChangeText={text => setFullName(text)}
          />
          <TextInputComp
            placeholder={strings.EMAIL}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInputComp
            placeholder={strings.PASSWORD}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            onPressSecure={() => setSecureText(!secureText)}
            // secureText={secureText ? strings.SHOW : strings.HIDE}
          />
          <TextInputComp
            placeholder={strings.CONFIRM_PASSWORD}
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            secureTextEntry={secureText}
            onPressSecure={() => setSecureText(!secureText)}
            secureText={secureText ? strings.SHOW : strings.HIDE}
          />
        </View>
        <View
          style={{
            flex: 0.2,
            justifyContent: 'flex-end',
            marginBottom: moderateScaleVertical(16),
          }}>
          <ButtonComp
            label={'Sign Up'}
            style={{backgroundColor: isDark ? colors.whiteColor : colors.gray5}}
            onPress={onHandleSignUp}
          />
        </View>
      </KeyboardAwareScrollView>
    </WrapperComponent>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(16),
  },
  headerStyle: {
    fontSize: textScale(24),
    color: colors.whiteColor,
    fontFamily: fontFamily.regular,
    // marginTop: moderateScaleVertical(15),
    marginBottom: moderateScaleVertical(10),
  },
  subHeader: {
    color: colors.whiteColor,
    marginBottom: moderateScaleVertical(40),
  },
  forget: {
    alignSelf: 'flex-end',
    color: colors.blueColor,
  },
});
