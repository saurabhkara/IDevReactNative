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

export default function IntialScreen({navigation}) {
  const handleTermsAndPolicy = (type = 1) => {
    if (type === 1) {
      Alert.alert('Terms');
    } else {
      Alert.alert('Policy');
    }
  };
  console.log('pixel ratio', PixelRatio.get());
  console.log('dimension', Dimensions.get('window'));
  return (
    <WrapperComponent>
      <View style={{alignItems: 'center', padding: 16, flex: 1}}>
        <View
          style={{
            flex: 0.3,
            justifyContent: 'center',
          }}>
          <Image style={{width: 150, height: 150}} source={imagePath.logo} />
        </View>
        <View style={{flex: 0.7, justifyContent: 'flex-end'}}>
          <Text style={{...styles.textStyle, marginBottom: 40, opacity: 0.5}}>
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
          <ButtonComp label={lang.LOGIN_WITH_PHONE} />
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
            buttonStyle={{marginVertical: 16, backgroundColor: 'white'}}
            textStyle={{color: 'black'}}
            leftImg={imagePath.ic_facebook}
          />
          <ButtonComp
            label={lang.LOGIN_WITH_APPLE}
            buttonStyle={{backgroundColor: 'white'}}
            textStyle={{color: 'black'}}
            leftImg={imagePath.ic_apple}
          />
          <Text style={{...styles.textStyle, marginVertical: 16}}>
            {lang.NEW_HERE}? <Text style={{color: 'blue'}}>{lang.SIGN_UP}</Text>
          </Text>
        </View>
      </View>
    </WrapperComponent>
  );
}
const styles = StyleSheet.create({
  textStyle: {
    fontFamily: fontFamily.regular,
    color: '#ffffff',
    textAlign: 'center',
  },
  termsPolicy: {
    textTransform: 'uppercase',
  },
  orStyle: {
    marginVertical: 16,
  },
});
