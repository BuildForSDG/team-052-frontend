import React, { FC, Fragment, useContext } from 'react';
import Navigation from './layouts/Navigation';
import AppFooter from './layouts/AppFooter';
import Banner from './layouts/Banner';
// import { AppState } from '../context/AppState';
import AppContext from '../context/AppContext';

// type CreateReportType = {
//   name: string;
//   description: string;
//   location: string;
// };

// type ReportTypes = {
//   report: CreateReportType[];
// };

const CreateReport: FC = () => {
  const { report } = useContext(AppContext);
  return (
    <Fragment>
      <Navigation backgroundColor={'rgb(1, 136, 73)'} variantColor={'light'} />
      <Banner />
      <div className="container mt-3 pt-3 pb-3 shadow">
        <form>
          <div className="row">
            <div className="col-12 mb-5">
              <input type="text" className="form-control" placeholder="Title example; severe accident at ojota" />
            </div>

            <div className="col-12 mb-5">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                placeholder="Short description of the incident"
              />
            </div>

            <div className="col-12 mb-5">
              <input type="text" className="form-control" placeholder="Location e.g Lekki Epe" />
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success btn-lg">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="container">
        <AppFooter />
      </div>
    </Fragment>
  );
};

export default CreateReport;
