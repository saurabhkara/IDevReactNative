import store from '../store';
import {changeTheme, setLang} from '../reducers/appSettingReducer';
const {dispatch} = store;

export const changeLanguage = data => {
  dispatch(setLang(data));
};

export const changeAppTheme = data => {
  dispatch(changeTheme(data));
};
