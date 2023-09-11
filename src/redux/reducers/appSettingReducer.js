import {createSlice} from '@reduxjs/toolkit';

const appSetting = createSlice({
  name: 'appSetting',
  initialState: {
    lang: 'en',
    isDark: true,
  },
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
    changeTheme: (state, action) => {
      state.isDark = action.payload;
    },
  },
});

export const {setLang, changeTheme} = appSetting.actions;
export default appSetting.reducer;
