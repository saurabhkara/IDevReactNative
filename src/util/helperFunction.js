import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    let val = value;
    if (typeof value !== 'string') {
      val = JSON.stringify(value);
    }
    await AsyncStorage.setItem(key, val);
    return {msg: `Saving successful`};
  } catch (e) {
    // saving error
    console.log('Error occurred in Async storage', e);
    return {error: true, msg: `Saving failed`};
  }
};

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log('Error occurred in Async storage', e);
  }
};
