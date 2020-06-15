import React, { FC, Fragment, useEffect } from 'react';
import Navigation from '../layouts/Navigation';
import { ReportContainer } from '../../styles/ReportStyle';
import { ReportProps } from '../../interfaces/ReportProps.interface';
import {useLocation} from 'react-router-dom'
const Report: FC<ReportProps> = ({ history }) => {
  console.log(history.location);
  let location = useLocation();
  console.log(location.state)
  useEffect(() => {
    // getSingleReport()
  })
  const report = {
    id: 1,
    visual_image: '/assets/imgs/mXaOJUdh3BJzTWLMj3bwTYsUTUdW1e3b8M3cJMIR.png',
    title: 'Name',
    status: 'Pending',
    location: 'Lagos',
  };
  return (
    <Fragment>
      <Navigation backgroundColor={'rgb(1, 136, 73)'} variantColor={'light'} />
      {/* <Banner /> */}
      <div className="container">
        <ReportContainer>
          <div className="row">
            <div key={report.id} className="col-md-12 mb-4" style={{ width: '18rem' }}>
              <div className="card shadow">
                <div className="reports-image m-4">
                  <img src={report.visual_image} className="card-img-top image" />
                </div>
                <div className="card-body pt-2">
                  {/* <div style={{ display: 'flex' }}> */}
                  <p className="card-title text-center">
                    <strong>{report.title}</strong>
                  </p>
                  <hr />

                  <div style={{ display: 'flex' }}>
                    <p>STATUS</p>: <span className="text-info">{report.status}</span>
                    {/* <p className="te/zxt-right ml-auto">Location: </p> */}
                    <span className="text-right ml-auto">{report.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ReportContainer>
        {/*<AppFooter />*/}
      </div>
    </Fragment>
  );
};

export default Report;
