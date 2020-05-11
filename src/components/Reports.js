/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import Navigation from './layouts/Navigation';
import Banner from './layouts/Banner';
import { ReportsContainer } from '../styles/ReportsStyle';
import AccidentImage from '../assets/image.jpg';
import Footer from './layouts/Footer';

const Reports = () => {
  return (
    <Fragment>
      <Navigation />
      <Banner />
      <div className="container">
        <ReportsContainer>
          <div className="row">
            <div className="col-md-6 mb-4" style={{ width: '18rem' }}>
              <div className="card shadow">
                <div className="reports-image m-4">
                  <img src={AccidentImage} className="card-img-top" />
                </div>
                <div className="card-body pt-2">
                  {/* <div style={{ display: 'flex' }}> */}
                  <div style={{ display: 'flex' }}>
                    <p>STATUS</p>: <span className="text-info">ENROUTE</span>
                    <p className="text-right ml-auto">SEVERITY: </p>
                    <span className="text-danger">HEAVY</span>
                  </div>

                  <p className="card-title text-center">
                    <strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nostrum!</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4" style={{ width: '18rem' }}>
              <div className="card shadow">
                <div className="reports-image m-4">
                  <img src={AccidentImage} className="card-img-top" />
                </div>
                <div className="card-body pt-2">
                  <div style={{ display: 'flex' }}>
                    <p>STATUS</p>: <span className="text-info">ENROUTE</span>
                    <p className="text-right ml-auto">SEVERITY: </p>
                    <span className="text-danger">HEAVY</span>
                  </div>
                  <p className="card-title text-center">
                    <strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nostrum!</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4" style={{ width: '18rem' }}>
              <div className="card shadow">
                <div className="reports-image m-4">
                  <img src={AccidentImage} className="card-img-top" />
                </div>
                <div className="card-body pt-2">
                  <div style={{ display: 'flex' }}>
                    <p>STATUS</p>: <span className="text-info">ENROUTE</span>
                    <p className="text-right ml-auto">SEVERITY: </p>
                    <span className="text-danger">HEAVY</span>
                  </div>
                  <p className="card-title text-center">
                    <strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nostrum!</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4" style={{ width: '18rem' }}>
              <div className="card shadow">
                <div className="reports-image m-4">
                  <img src={AccidentImage} className="card-img-top" />
                </div>
                <div className="card-body pt-2">
                  <div style={{ display: 'flex' }}>
                    <p>STATUS</p>: <span className="text-info">ENROUTE</span>
                    <p className="text-right ml-auto">SEVERITY: </p>
                    <span className="text-danger">HEAVY</span>
                  </div>
                  <p className="card-title text-center">
                    <strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nostrum!</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4" style={{ width: '18rem' }}>
              <div className="card shadow">
                <div className="reports-image m-4">
                  <img src={AccidentImage} className="card-img-top" />
                </div>
                <div className="card-body pt-2">
                  <div style={{ display: 'flex' }}>
                    <p>STATUS</p>: <span className="text-info">ENROUTE</span>
                    <p className="text-right ml-auto">SEVERITY: </p>
                    <span className="text-danger">HEAVY</span>
                  </div>
                  <p className="card-title text-center">
                    <strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nostrum!</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4" style={{ width: '18rem' }}>
              <div className="card shadow">
                <div className="reports-image m-4">
                  <img src={AccidentImage} className="card-img-top" />
                </div>
                <div className="card-body pt-2">
                  <div style={{ display: 'flex' }}>
                    <p>STATUS</p>: <span className="text-info">ENROUTE</span>
                    <p className="text-right ml-auto">SEVERITY: </p>
                    <span className="text-danger">HEAVY</span>
                  </div>
                  <p className="card-title text-center">
                    <strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nostrum!</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ReportsContainer>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Reports;
