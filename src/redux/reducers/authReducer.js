import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: '',
  user: 'Saurabh',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
