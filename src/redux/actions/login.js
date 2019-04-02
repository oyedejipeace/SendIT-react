import axios from '../../utils/axiosConfig';
import { LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS, SET_LOGIN_STATE } from './actionTypes';

const api = process.env.API_ROOT_URL;

export const setLoggedInState = isLoggedIn => ({
  type: SET_LOGIN_STATE,
  payload: isLoggedIn
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginRequestSuccess = () => ({
  type: LOGIN_REQUEST_SUCCESS
});

export const login = ({
  email: userEmail,
  password: userPassword
}) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const {
      data: { token }
    } = await axios.post(`${api}/auth/login`, { userEmail, userPassword });
    localStorage.setItem('token', token);
    dispatch(loginRequestSuccess());
  } catch (error) {
    throw error;
  }
};
