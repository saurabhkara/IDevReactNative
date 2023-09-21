import store from '../store';
import {changeTheme, setLanguage} from '../reducers/appSettingReducer';
import strings from '../../constants/lang';
const {dispatch} = store;

export const changeLanguage = data => {
  strings.setLanguage(data);
  return dispatch(setLanguage(data));
};

export const changeAppTheme = data => {
  return dispatch(changeTheme(data));
};
