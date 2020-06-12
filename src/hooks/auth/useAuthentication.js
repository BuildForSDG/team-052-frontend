import { useState, useReducer } from 'react';
import axios from 'axios';
import { LOGIN_URL, LOGOUT_URL } from '../../Urls/AuthenticationUrl';
import authenticationReducer from '../../reducers/authentication/authenticationReducer';
import { LOGIN_USER } from '../../constants/AuthenticationTypes';
import { LOADING_STOPS } from '../../constants/ReportTypes';
import Urls from '../../utils/Paths';
import { toast } from 'react-toastify';

export const useAuthentication = () => {
  const [{ loadingLogin }, dispatch] = useReducer(authenticationReducer, {
    loadingLogin: false,
  });
  const loginState = {
    email: '',
    password: '',
  };

  const [login, setLogin] = useState(loginState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const loginUser = async (params, history, location) => {
    const path = location.state ? location.state.from.pathname : `${Urls.AUTH_HOME}`;

    dispatch({
      type: LOGIN_USER,
    });
    try {
      const response = await axios.post(`${LOGIN_URL}`, params);

      if (response.data.message === 'login successful') {
        sessionStorage.setItem('ApiToken', response.data.data.api_token);
        history.push(path);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data.errors) {
          // alert(error.response.data.errors.email);
          dispatch({ type: LOADING_STOPS });
          toast.error('Invalid credentials');
        } else {
          // alert(error.response.data.message);
          dispatch({ type: LOADING_STOPS });
        }
      } else {
        dispatch({ type: LOADING_STOPS });
      }
    }
  };

  const logoutUser = async (history) => {
    try {
      const response = await axios.post(`${LOGOUT_URL}`);
      if (response.data.message === 'logout successful') {
        sessionStorage.removeItem('ApiToken');
        history.push(`${Urls.HOME}`);
      }
    } catch (e) {
      toast.error('Something went wrong!');
    }
  };
  return { onChange, login, loginUser, loadingLogin, logoutUser };
};

export default useAuthentication;
