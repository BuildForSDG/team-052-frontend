import * as types from '../../constants/ReportTypes';

export const reportsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOADING_STARTS:
      return {
        ...state,
        loading: true,
      };

    case types.LOADING_STOPS:
      return {
        ...state,
        loading: false,
      };
    case types.GET_ALL_REPORTS:
      return {
        ...state,
        reports: payload,
        loading: false,
      };
    case types.GET_GUEST_REPORTS:
      return {
        ...state,
        guestReports: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reportsReducer;
