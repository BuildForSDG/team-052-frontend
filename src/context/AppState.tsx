import React, { createContext, ReactNode } from 'react';
import useReports from '../hooks/reports/useReports';
// import AppContext from './AppContext';
import useAuthentication from '../hooks/auth/useAuthentication';
import useAdmin from '../hooks/admin/useAdmin';

interface AppProps {
  children: ReactNode;
}
const AppContext = createContext({});
// eslint-disable-next-line react/prop-types
function AppState({ children }: AppProps) {
  const { Provider } = AppContext;
  console.log(Provider)
  const { reports, loading, report, guestReports } = useReports();
  const { onChange, login, loginUser, loadingLogin, logoutUser } = useAuthentication();
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
        logoutUser,
        guestReports
      }}
    >
      {children}
    </Provider>
  );
}
export { AppState };

// export default AppState;
