/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import Navigation from './layouts/Navigation';
import Banner from './layouts/Banner';
import { ReportsContainer } from '../styles/ReportsStyle';

const Reports = () => {
  return (
    <Fragment>
      <Navigation />
      <Banner />
      <div className="container">
        <ReportsContainer>
          <div className="row mt-2">
            <div className="col-4" style={{ width: '18rem' }}>
              <img src="https://via.placeholder.com/150" className="card-img-top" />
              <div className="card-body pt-2">
                <h5 className="card-title">Dummy</h5>
                <hr />
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="col-4" style={{ width: '18rem' }}>
              <img src="https://via.placeholder.com/150" className="card-img-top" />
              <div className="card-body pt-2">
                <h5 className="card-title">Dummy</h5>
                <hr />
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="col-4" style={{ width: '18rem' }}>
              <img src="https://via.placeholder.com/150" className="card-img-top" />
              <div className="card-body pt-2">
                <h5 className="card-title">Dummy</h5>
                <hr />
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="col-4" style={{ width: '18rem' }}>
              <img src="https://via.placeholder.com/150" className="card-img-top" />
              <div className="card-body pt-2">
                <h5 className="card-title">Dummy</h5>
                <hr />
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="col-4" style={{ width: '18rem' }}>
              <img src="https://via.placeholder.com/150" className="card-img-top" />
              <div className="card-body pt-2">
                <h5 className="card-title">Dummy</h5>
                <hr />
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </ReportsContainer>
      </div>
    </Fragment>
  );
};

export default Reports;
