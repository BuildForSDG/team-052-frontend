/* eslint-disable import/no-named-as-default */
import axios from 'axios';
import { useReducer, useEffect } from 'react';
import { GET_ALL_REPORTS_URL } from '../../Urls/ReportUrl';
import reportsReducer from '../../reducers/reports/reportsReducer';
import * as types from '../../constants/ReportTypes';
import { initialState } from '../../reducers/reports/reportsState';

export const useReports = () => {
  const [{ reports, loading }, dispatch] = useReducer(reportsReducer, initialState);
  const getReports = async () => {
    dispatch({
      type: types.LOADING_STARTS,
    });
    try {
      const response = await axios.get(`${GET_ALL_REPORTS_URL}`);
      if (response.data) {
        dispatch({
          type: types.GET_ALL_REPORTS,
          payload: response.data.data,
        });
      }
    } catch (e) {
      if (e) {
        dispatch({
          type: types.LOADING_STOPS,
        });
      }
    }
  };
  useEffect(() => {
    getReports();
  }, []);

  return { reports, loading };
};

export default useReports;
