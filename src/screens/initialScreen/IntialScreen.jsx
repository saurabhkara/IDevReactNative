import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import navigationStrings from '../../navigations/navigationStrings';
import WrapperComponent from '../../components/WrapperComponent';
import lang from '../../constants/lang';
import fontFamily from '../../constants/fontFamily';
import ButtonComp from '../../components/ButtonComp';
import imagePath from '../../constants/imagePath';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import TextComp from '../../components/TextComp';
import {useSelector, useDispatch} from 'react-redux';
import colors from '../../constants/colors';
import ModalComp from '../../components/ModalComp';
import {
  changeAppTheme,
  changeLanguage,
} from '../../redux/actions/appSettingAction';
import SelectionComponent from '../../components/SelectionComponent';
import strings from '../../constants/lang';
import RNRestart from 'react-native-restart';
import {storeData} from '../../util/helperFunction';

export default function IntialScreen({navigation}) {
  const dispatch = useDispatch();
  const {isDark, language} = useSelector(state => state.appSettings);
  const [isVisible, setIsVisible] = useState(false);

  const handleTermsAndPolicy = (type = 1) => {
    if (type === 1) {
      Alert.alert('Terms');
    } else {
      Alert.alert('Policy');
    }
  };

  const onPressLang = lan => {
    storeData('lang', {lan: lan}).then(() => {
      setIsVisible(false);
      changeLanguage(lan);
      strings.setLanguage(lan);
      RNRestart.restart();
    });
  };

  const onHandleTheme = theme => {
    storeData('theme', {theme: theme}).then(() => {
      setIsVisible(false);
      changeAppTheme(theme);
      RNRestart.restart();
    });
  };

  return (
    <WrapperComponent>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setIsVisible(true)}
          activeOpacity={0.6}
          style={{
            ...styles.circularButton,
            backgroundColor: isDark ? colors.whiteColor : colors.gray3,
          }}>
          <TextComp
            text={language}
            style={{color: isDark ? 'black' : 'white'}}
          />
        </TouchableOpacity>
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
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
        style={{
          margin: 0,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            minHeight: moderateScaleVertical(height / 4),
            padding: moderateScale(16),
            borderTopLeftRadius: moderateScale(8),
            borderTopRightRadius: moderateScale(8),
          }}>
          <Text
            style={{
              fontSize: textScale(16),
              marginBottom: moderateScaleVertical(10),
            }}>
            Choose Language
          </Text>
          <SelectionComponent
            onPress={() => onPressLang('hi')}
            selected={language}
            label={'Hindi'}
            value={'hi'}
          />
          <SelectionComponent
            onPress={() => onPressLang('en')}
            selected={language}
            label={'English'}
            value={'en'}
          />
          <Text
            style={{
              fontSize: textScale(16),
              marginBottom: moderateScaleVertical(10),
            }}>
            Select your favorite theme
          </Text>
          <SelectionComponent
            label={'Light'}
            value="light"
            selected={isDark ? 'dark' : 'light'}
            onPress={() => onHandleTheme(false)}
          />
          <SelectionComponent
            label={'Dark'}
            value="dark"
            selected={isDark ? 'dark' : 'light'}
            onPress={() => onHandleTheme(true)}
          />
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
    flex: 0.2,
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
  circularButton: {
    height: moderateScaleVertical(50),
    width: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: moderateScale(25),
  },
});
