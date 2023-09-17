import {createSlice} from '@reduxjs/toolkit';

const appSetting = createSlice({
  name: 'appSetting',
  initialState: {
    language: 'en',
    isDark: true,
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    changeTheme: (state, action) => {
      state.isDark = action.payload;
    },
  },
});

export const {setLanguage, changeTheme} = appSetting.actions;
export default appSetting.reducer;
