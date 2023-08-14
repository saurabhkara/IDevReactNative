import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: '',
  user: 'Saurabh',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUser: (state, {payload}) => {
      state.user = payload;
    },
  },
});
export const {updateUser} = authSlice.actions;
export default authSlice.reducer;
