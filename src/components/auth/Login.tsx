import React, { FC, useContext, Fragment, FormEvent } from 'react';
import Navigation from '../layouts/Navigation';
import Banner from '../layouts/Banner';
// import AppFooter from '../layouts/AppFooter';
import AppContext from '../../context/AppContext';
import { LoginProps } from '../../interfaces/LoginProps.interface';

// eslint-disable-next-line react/prop-types
const Login: FC<LoginProps> = ({ history }) => {
  const { onChange, login, loginUser, loadingLogin } = useContext(AppContext);
  const { email, password } = login;
  const isEnabled = () => email.length > 0 && password.length > 0;
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(login, history);
  };
  return (
    <Fragment>
      <Navigation backgroundColor={'rgb(1, 136, 73)'} variantColor={'light'} />
      <Banner />
      <div className="container mt-3 pt-3 pb-3 login-container">
        <form onSubmit={submitForm}>
          <div className="row">
            <div className="col-12 mb-5">
              <input
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="col-12 mb-5">
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                className="form-control"
                placeholder="Enter password"
              />
            </div>
          </div>

          <div className="text-center">
            {loadingLogin ? (
              <button disabled={loadingLogin} type="submit" className="btn btn-success btn-lg">
                Submitting...
              </button>
            ) : (
              <button disabled={!isEnabled()} type="submit" className="btn btn-success btn-lg">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>

      {/* <div className="container">
        <AppFooter />
      </div> */}
    </Fragment>
  );
};

export default Login;
