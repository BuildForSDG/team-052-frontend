/* eslint-disable import/no-named-as-default */
import axios from 'axios';
import { useReducer, useState, useEffect } from 'react';
import * as URL from '../../Urls/ReportUrl';
import reportsReducer from '../../reducers/reports/reportsReducer';
import * as types from '../../constants/ReportTypes';
import { initialState } from '../../reducers/reports/reportsState';

console.log(`${sessionStorage.getItem('ApiToken')}`);
export const useReports = () => {
  const reportState = {
    name: '',
    description: '',
    location: '',
  };
  const [{ reports, loading }, dispatch] = useReducer(reportsReducer, initialState);
  const [report, setReport] = useState(reportState);
  const onChange = (e) => {
    const { name, value } = e.target;
    setReport({
      ...report,
      [name]: value,
    });
  };
  const getReports = async () => {
    console.log(`${URL.GET_AUTH_REPORTS_URL}`);
    dispatch({
      type: types.LOADING_STARTS,
    });
    console.log(`Bearer ${sessionStorage.getItem('ApiToken')}`);

    try {
      const response = await axios.get(`${URL.GET_AUTH_REPORTS_URL}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('ApiToken')}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      console.log(response.data);
      if (response.data) {
        dispatch({
          type: types.GET_ALL_REPORTS,
          payload: response.data.data,
        });
      }
    } catch (e) {
      console.log(e);
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

  return { reports, loading, onChange, report };
};

export default useReports;
