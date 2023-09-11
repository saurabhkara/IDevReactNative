import {configureStore} from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import appSettingReducer from './reducers/appSettingReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    appSettings: appSettingReducer,
  },
});

export default store;
