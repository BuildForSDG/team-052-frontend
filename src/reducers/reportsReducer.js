import { GET_ALL_REPORTS } from '../constants/ReportTypes';

export const reportsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_REPORTS:
      return {
        ...state,
        reports: payload,
      };
    default:
      return state;
  }
};

export default reportsReducer;
