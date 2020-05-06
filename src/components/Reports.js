/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import Navigation from './layouts/Navigation';
import Banner from './layouts/Banner';
import { ReportsContainer } from '../styles/ReportsStyle';
import AccidentImage from '../assets/image.jpg';

const Reports = () => {
  return (
    <Fragment>
      <Navigation />
      <Banner />
      <div className="container">
        <ReportsContainer>
          <div className="row mt-2">
            <div className="col-6 mb-5" style={{ width: '18rem' }}>
              <div className="m-4">
                <img src={AccidentImage} className="card-img-top" />
              </div>
              <div className="card-body pt-2">
                <p className="card-title">
                  <strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nostrum!</strong>
                </p>
                {/* <p className="card-text text-center"> */}
                {/*  Some quick example text to build on the card title and make up the bulk of the card's content. */}
                {/* </p> */}
                {/* <a href="#" className="btn btn-primary"> */}
                {/*  Go somewhere */}
                {/* </a> */}
              </div>
            </div>
            <div className="col-6 mb-5" style={{ width: '18rem' }}>
              <div className="m-4">
                <img src={AccidentImage} className="card-img-top" />
              </div>
              <div className="card-body pt-2">
                <h5 className="card-title">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nostrum!
                </h5>
                {/* <p className="card-text text-center"> */}
                {/*  Some quick example text to build on the card title and make up the bulk of the card's content. */}
                {/* </p> */}
                {/* <a href="#" className="btn btn-primary"> */}
                {/*  Go somewhere */}
                {/* </a> */}
              </div>
            </div>
            <div className="col-6 mb-5" style={{ width: '18rem' }}>
              <div className="m-4">
                <img src={AccidentImage} className="card-img-top" />
              </div>
              <div className="card-body pt-2">
                <h5 className="card-title">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nostrum!
                </h5>
                {/* <p className="card-text text-center"> */}
                {/*  Some quick example text to build on the card title and make up the bulk of the card's content. */}
                {/* </p> */}
                {/* <a href="#" className="btn btn-primary"> */}
                {/*  Go somewhere */}
                {/* </a> */}
              </div>
            </div>
          </div>
        </ReportsContainer>
      </div>
    </Fragment>
  );
};

export default Reports;
