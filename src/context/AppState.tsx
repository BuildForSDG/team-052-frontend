import React, { createContext, ReactNode } from 'react';
import useAuthentication from '../hooks/auth/useAuthentication';
import useAdmin from '../hooks/admin/useAdmin';
import useReports from '../hooks/reports/useReports';

interface AppProps {
  children: ReactNode;
}
export const AppContext = createContext({});
// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }: AppProps) => {
  const { reports, loading, report, createReport, onReportChange, onFileChange, file, loadingReport } = useReports();
  const { onChange, login, loginUser, loadingLogin, logoutUser } = useAuthentication();
  const { admin, createAdminChange, createAdmin, creatingAdmin } = useAdmin();
  return (
    <AppContext.Provider
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
        logoutUser,
        createReport,
        onReportChange,
        onFileChange,
        file,
        loadingReport,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
