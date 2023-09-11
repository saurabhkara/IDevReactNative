import store from '../store';
import {updateUser} from '../reducers/authReducer';
const {dispatch} = store;

export const login = data => {
  dispatch(updateUser(data));
};
