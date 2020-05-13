/* eslint-disable import/prefer-default-export */
import React from 'react';
import AppContext from './AppContext';

const AppState = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppState;
