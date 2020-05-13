/* eslint-disable import/no-named-as-default */
import axios from 'axios';
import { useReducer, useEffect } from 'react';
import { GET_ALL_REPORTS_URL } from '../../Urls/ReportUrl';
import reportsReducer from '../../reducers/reportsReducer';
import { GET_ALL_REPORTS } from '../../constants/ReportTypes';

export const useReports = () => {
  const [{ reports }, dispatch] = useReducer(reportsReducer, {
    reports: [],
  });
  const getReports = async () => {
    const response = await axios.get(`${GET_ALL_REPORTS_URL}`);
    if (response.data) {
      dispatch({
        type: GET_ALL_REPORTS,
        payload: response.data.data,
      });
    }
  };
  useEffect(() => {
    getReports();
  }, []);

  return { reports };
};

export default useReports;
