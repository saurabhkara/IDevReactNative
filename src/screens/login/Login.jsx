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
import TextComp from '../../components/TextComp';
import {useSelector} from 'react-redux';

export default function Login({navigation}) {
  const {isDark} = useSelector(state => state.appSettings);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  return (
    <WrapperComponent>
      <HeaderComponent onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={{flex: 0.8}}>
          <TextComp style={styles.headerStyle} text={strings.WELCOME_BACK} />
          <TextComp
            style={styles.subHeader}
            text={strings.WE_ARE_HAPPY_TO_SEE}
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
          <Text style={styles.forget}>{strings.FORGOT_PASSWORD}</Text>
        </View>
        <View
          style={{
            flex: 0.2,
            justifyContent: 'flex-end',
          }}>
          <ButtonComp label={'Login'} />
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
