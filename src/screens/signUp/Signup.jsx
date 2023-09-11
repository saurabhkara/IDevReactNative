import {View, Text, StyleSheet, TextInput} from 'react-native';
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

export default function Signup({navigation}) {
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  return (
    <WrapperComponent>
      <HeaderComponent onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={{flex: 0.8}}>
          <Text style={styles.headerStyle}>{strings.CREATE_ACCOUNT}</Text>
          <Text style={styles.subHeader}>{strings.CREATE_AN_ACCOUNT}</Text>
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
            secureTextEntry={secureText}
            onPressSecure={() => setSecureText(!secureText)}
            secureText={secureText ? strings.SHOW : strings.HIDE}
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
          }}>
          <ButtonComp label={'Sign Up'} />
        </View>
      </View>
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
