/* eslint-disable import/no-named-as-default */
import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';
import * as URL from '../../Urls/ReportUrl';
import reportsReducer from '../../reducers/reports/reportsReducer';
import * as types from '../../constants/ReportTypes';
import { GET_GUEST_REPORTS } from '../../constants/ReportTypes';
import { toast } from 'react-toastify';
import { GET_ALL_REPORTS } from '../../constants/ReportTypes';
import { GET_AUTH_REPORTS_URL } from '../../Urls/ReportUrl';

export const useReports = (history) => {
  const reportState = {
    name: '',
    description: '',
    location: '',
    loaded: 0,
  };
  const [{ reports, loading, guestReports }, dispatch] = useReducer(reportsReducer, {
    loading: true,
    reports: [],
    guestReports: [],
  });
  const [report, setReport] = useState(reportState);
  const [file, setFile] = useState(null);
  const [loadingReport, setLoadingReport] = useState(false);
  const onReportChange = (e) => {
    const { name, value } = e.target;
    setReport({
      ...report,
      [name]: value,
    });
  };
  const onFileChange = (e) => {
    const { files } = e.target;
    setFile(files[0]);
  };

  const getReports = async () => {
    dispatch({
      type: types.LOADING_STARTS,
    });

    try {
      return await axios.get(`${URL.GET_AUTH_REPORTS_URL}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('ApiToken')}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
    } catch (e) {
      return e;
    }
  };

  const getGuestsReports = async () => {
    dispatch({
      type: types.LOADING_STARTS,
    });
    try {
      return await axios.get(`${URL.GET_GUEST_REPORTS_URL}`);
    } catch (e) {
      return e;
    }
  };
  const getFilteredReport = async (params) => {
    dispatch({
      type: types.LOADING_STARTS,
    });

    if (sessionStorage.getItem('ApiToken')) {
      try {
        const response = await axios.get(`${URL.GET_AUTH_REPORTS_URL}?status=${params}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('ApiToken')}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
        console.log(response);
        if (response.data) {
          dispatch({
            type: GET_ALL_REPORTS,
            payload: response.data.data,
          });
        } else {
          toast.error(`Unable to get reports!`);
          dispatch({
            type: types.LOADING_STOPS,
          });
        }
      } catch (e) {
        // console.log(e.response);
        // data: {message: "unauthorized."}
        if (e.response.data.message === 'unauthorized') {
          toast.error(`Token Expired, Login Again!`);
          dispatch({
            type: types.LOADING_STOPS,
          });
          setTimeout(() => {
            history.push('/login')
          }, 2000)
        } else {
          toast.error(`Something went wrong!`);
          dispatch({
            type: types.LOADING_STOPS,
          });
        }
      }
    } else {
      try {
        const response = await axios.get(`${URL.GET_GUEST_REPORTS_URL}?status=${params}`);
        if (response.data) {
          dispatch({
            type: GET_GUEST_REPORTS,
            payload: response.data.data,
          });
        }
        toast.error(`Something went wrong!`);
        dispatch({
          type: types.LOADING_STOPS,
        });
      } catch (e) {
        toast.error(`Something went wrong!`);
        dispatch({
          type: types.LOADING_STOPS,
        });
      }
    }
  };
  const createReport = async (params, history) => {
    setLoadingReport(true);
    try {
      const response = await axios.post(`${URL.GET_AUTH_REPORTS_URL}`, params);
      if (response.data.message) {
        setLoadingReport(false);
        toast.success('Incident Reported!');
        setReport(reportState);
        setFile(null);
        setTimeout(() => {
          history.push('/');
        }, 2000);
      }
      setLoadingReport(false);
    } catch (e) {
      setLoadingReport(false);
      toast.info('Something went wrong!');
    }
  };
  const getReport = async (param) => {
    console.log(param);
    const response = await axios.get(`${URL.GET_AUTH_REPORTS_URL}/${param}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('ApiToken')}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  };
  const updateStatus = async (id, value) => {
    const data = {
      status: value,
    };
    console.log(data);
    console.log(`${GET_AUTH_REPORTS_URL}/${id}`);
    try {
      const response = await axios.patch(`${GET_AUTH_REPORTS_URL}/${id}`, data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReports()
      .then((data) => {
        dispatch({
          type: types.GET_ALL_REPORTS,
          payload: data.data.data,
        });
      })
      .catch(() => {
        dispatch({
          type: types.LOADING_STOPS,
        });
      });
    getGuestsReports()
      .then((data) => {
        dispatch({
          type: types.GET_GUEST_REPORTS,
          payload: data.data.data,
        });
      })
      .catch(() => {
        dispatch({
          type: types.LOADING_STOPS,
        });
      });
  }, []);
  return {
    reports,
    loading,
    onReportChange,
    report,
    guestReports,
    getFilteredReport,
    createReport,
    onFileChange,
    file,
    loadingReport,
    getReport,
    updateStatus,
  };
};

export default useReports;
