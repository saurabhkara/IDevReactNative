import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  PixelRatio,
  Dimensions,
} from 'react-native';
import React from 'react';
import navigationStrings from '../../navigations/navigationStrings';
import WrapperComponent from '../../components/WrapperComponent';
import lang from '../../constants/lang';
import fontFamily from '../../constants/fontFamily';
import ButtonComp from '../../components/ButtonComp';
import imagePath from '../../constants/imagePath';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';

export default function IntialScreen({navigation}) {
  const handleTermsAndPolicy = (type = 1) => {
    if (type === 1) {
      Alert.alert('Terms');
    } else {
      Alert.alert('Policy');
    }
  };
  return (
    <WrapperComponent>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logoImage} source={imagePath.logo} />
        </View>
        <View style={styles.subContainer}>
          <Text style={{...styles.textStyle, ...styles.privacyPolicyText}}>
            {lang.BY_CLICKING_LOG_IN}{' '}
            <Text
              onPress={() => handleTermsAndPolicy(1)}
              style={styles.termsPolicy}>
              {lang.TERMS}
            </Text>
            {lang.LEARN}
            <Text
              onPress={() => handleTermsAndPolicy(1)}
              style={styles.termsPolicy}>
              {lang.PRIVACY_POLICY}
            </Text>
          </Text>
          <ButtonComp
            label={lang.LOGIN_WITH_PHONE}
            onPress={() => navigation.navigate(navigationStrings.LOGIN)}
          />
          <Text style={{...styles.textStyle, ...styles.orStyle}}>
            {lang.OR}
          </Text>
          <ButtonComp
            label={lang.LOGIN_WITH_GOOGLE}
            buttonStyle={{backgroundColor: 'white'}}
            textStyle={{color: 'black'}}
            leftImg={imagePath.ic_google}
          />
          <ButtonComp
            label={lang.LOGIN_WITH_FACEBOOK}
            buttonStyle={{
              marginVertical: moderateScaleVertical(16),
              backgroundColor: 'white',
            }}
            textStyle={{color: 'black'}}
            leftImg={imagePath.ic_facebook}
          />
          <ButtonComp
            label={lang.LOGIN_WITH_APPLE}
            buttonStyle={{backgroundColor: 'white'}}
            textStyle={{color: 'black'}}
            leftImg={imagePath.ic_apple}
          />
          <Text
            onPress={() => navigation.navigate(navigationStrings.SIGNUP)}
            style={{
              ...styles.textStyle,
              marginVertical: moderateScaleVertical(16),
            }}>
            {lang.NEW_HERE}? <Text style={{color: 'blue'}}>{lang.SIGN_UP}</Text>
          </Text>
        </View>
      </View>
    </WrapperComponent>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: moderateScale(16),
    flex: 1,
  },
  logoContainer: {
    flex: 0.3,
    justifyContent: 'center',
  },
  logoImage: {
    width: moderateScale(150),
    height: moderateScale(150),
    borderRadius: moderateScale(150 / 2),
  },
  privacyPolicyText: {
    marginBottom: moderateScaleVertical(40),
    opacity: 0.5,
  },
  textStyle: {
    fontFamily: fontFamily.regular,
    color: '#ffffff',
    textAlign: 'center',
    fontSize: textScale(12),
  },
  subContainer: {
    flex: 0.7,
    justifyContent: 'flex-end',
  },
  termsPolicy: {
    textTransform: 'capitalize',
  },
  orStyle: {
    marginVertical: moderateScaleVertical(16),
  },
});
