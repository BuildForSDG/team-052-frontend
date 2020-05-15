import React, { ReactNode } from 'react';
import useReports from '../hooks/reports/useReports';
import AppContext from './AppContext';

interface AppProps {
  children: ReactNode;
}

// eslint-disable-next-line react/prop-types
export const AppState = ({ children }: AppProps) => {
  const { Provider } = AppContext;
  const { reports, loading, report } = useReports();
  return <Provider value={{ reports, loading, report }}>{children}</Provider>;
};

// export default AppState;
