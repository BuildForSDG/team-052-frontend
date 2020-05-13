/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
// eslint-disable-next-line import/no-named-as-default
import useReports from '../hooks/reports/useReports';

const AppState = ({ children }) => {
  const { reports } = useReports();
  return <AppContext.Provider value={{ reports }}>{children}</AppContext.Provider>;
};

AppState.propTypes = {
  children: PropTypes.shape(),
};
export default AppState;
