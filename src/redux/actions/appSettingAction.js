// import store from '../store';
import {changeTheme, setLanguage} from '../reducers/appSettingReducer';
// const {dispatch} = store;

export const changeLanguage = data => {
  return dispatch => dispatch(setLanguage(data));
};

export const changeAppTheme = data => {
  return function (dispatch) {
    return dispatch(changeTheme(data));
  };
};
