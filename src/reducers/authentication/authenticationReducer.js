import * as load from '../../constants/ReportTypes';
import { LOGIN_USER } from '../../constants/AuthenticationTypes';

export const authenticationReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case load.LOADING_STARTS:
      return {
        ...state,
        loadingLogin: true,
      };

    case load.LOADING_STOPS:
      return {
        ...state,
        loadingLogin: false,
      };

    default:
      return state;

    case LOGIN_USER:
      return {
        ...state,
        loadingLogin: true,
      };
  }
};

export default authenticationReducer;
