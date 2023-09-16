import {View, Text, Image, StyleSheet, Alert} from 'react-native';
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
import TextComp from '../../components/TextComp';
import {useSelector} from 'react-redux';
import colors from '../../constants/colors';
import ModalComp from '../../components/ModalComp';

export default function IntialScreen({navigation}) {
  const {isDark} = useSelector(state => state.appSettings);
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
          <TextComp
            text={lang.BY_CLICKING_LOG_IN}
            style={{
              textAlign: 'center',
              marginBottom: moderateScaleVertical(40),
            }}>
            <>
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
            </>
          </TextComp>
          <ButtonComp
            label={lang.LOGIN_WITH_PHONE}
            onPress={() => navigation.navigate(navigationStrings.LOGIN)}
          />
          <TextComp
            text={lang.OR}
            style={{
              ...styles.textStyle,
              marginVertical: moderateScaleVertical(16),
            }}
          />
          <ButtonComp
            label={lang.LOGIN_WITH_GOOGLE}
            buttonStyle={{
              backgroundColor: isDark ? colors.whiteColor : colors.gray5,
            }}
            textStyle={{color: 'black'}}
            leftImg={imagePath.ic_google}
          />
          <ButtonComp
            label={lang.LOGIN_WITH_FACEBOOK}
            buttonStyle={{
              marginVertical: moderateScaleVertical(16),
              backgroundColor: isDark ? colors.whiteColor : colors.gray5,
            }}
            textStyle={{color: 'black'}}
            leftImg={imagePath.ic_facebook}
          />
          <ButtonComp
            label={lang.LOGIN_WITH_APPLE}
            buttonStyle={{
              backgroundColor: isDark ? colors.whiteColor : colors.gray5,
            }}
            textStyle={{color: 'black'}}
            leftImg={imagePath.ic_apple}
          />
          <TextComp
            text={lang.NEW_HERE}
            onPress={() => navigation.navigate(navigationStrings.SIGNUP)}
            style={{
              textAlign: 'center',
              marginVertical: moderateScaleVertical(16),
            }}>
            <Text style={{color: 'blue'}}>{lang.SIGN_UP}</Text>
          </TextComp>
        </View>
      </View>
      <ModalComp
        isVisible={true}
        style={{
          // backgroundColor: 'white',
          margin: 0,
          justifyContent: 'flex-end',
        }}>
        <View style={{width: '100%', backgroundColor: 'white'}}>
          <Text>I am the modal content!</Text>
        </View>
      </ModalComp>
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
});
