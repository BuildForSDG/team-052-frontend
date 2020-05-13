import React, { Fragment } from 'react';
import Navigation from './layouts/Navigation';
import AppFooter from './layouts/AppFooter';
import Banner from './layouts/Banner';

const CreateReport = () => {
  return (
    <Fragment>
      <Navigation variant={'dark'} backgroundColor={'light'} />
      <Banner />
      <div className="container mt-5">
        <form>
          <div className="row">
            <div className="col-12 mb-5">
              <input type="text" className="form-control" placeholder="Title example; severe accident at ojota" />
            </div>

            <div className="col-12 mb-5">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Short description of the incident"
              />
            </div>

            <div className="col-12 mb-5">
              <input type="text" className="form-control" placeholder="Location e.g Lekki Epe" />
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg">
              Submit
            </button>
          </div>
        </form>
        <AppFooter />
      </div>
    </Fragment>
  );
};

export default CreateReport;
