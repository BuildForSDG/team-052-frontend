import React, { ReactNode } from 'react';
import useReports from '../hooks/reports/useReports';
import AppContext from './AppContext';
import useAuthentication from '../hooks/auth/useAuthentication';
import useAdmin from '../hooks/admin/useAdmin';

interface AppProps {
  children: ReactNode;
}

// eslint-disable-next-line react/prop-types
export const AppState = ({ children }: AppProps) => {
  const { Provider } = AppContext;
  const { reports, loading, report } = useReports();
  const { onChange, login, loginUser, loadingLogin } = useAuthentication();
  const { admin, createAdminChange, createAdmin, creatingAdmin } = useAdmin();
  return (
    <Provider
      value={{
        reports,
        loading,
        report,
        onChange,
        login,
        loginUser,
        loadingLogin,
        admin,
        createAdminChange,
        createAdmin,
        creatingAdmin,
      }}
    >
      {children}
    </Provider>
  );
};

// export default AppState;
