import React, { Fragment, useEffect, useState } from 'react';
import Navigation from '../layouts/Navigation';
import { ReportContainer } from '../../styles/ReportStyle';
import { useLocation } from 'react-router-dom';
import Moment from 'react-moment';
import useReports from '../../hooks/reports/useReports';

// eslint-disable-next-line react/prop-types
const Report = ({ history }) => {
  const [one, setOne] = useState({});
  const {updateStatus} = useReports();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.report) {
      const { report } = location.state;
      console.log(report);
      setOne(report);
    } else {
      history.push('/all-reports');
    }
  }, [history, location]);
  return (
    <Fragment>
      <Navigation backgroundColor={'rgb(1, 136, 73)'} variantColor={'light'} />
      {/* <Banner /> */}
      <div className="container">
        <ReportContainer>
          <div className="row">
            <div key={one.id} className="col-md-12 mb-4" style={{ width: '18rem' }}>
              <div className="card" style={{ border: 'white' }}>
                <div className="reports-image m-4">
                  <img src={one.visual_image} className="card-img-top image" />
                </div>
                <div className="card-body pt-2">
                  {/* <div style={{ display: 'flex' }}> */}
                  <p className="card-title text-center">
                    <strong>{one.title}</strong>
                  </p>
                  <hr />

                  <div>
                    <div style={{ display: 'flex' }}>
                      <p>STATUS</p>- <span className="text-info">{one.status}</span>
                      {/*<div className="update-status">*/}
                      <select onChange={(e) => updateStatus(one.id, e.target.value, history)} className="update-status">
                        <option>Update Status</option>
                        <option value="pending">Pending</option>
                        <option value="acknowledged">Acknowledged</option>
                        <option value="enroute">Enroute</option>
                      </select>
                      {/*</div>*/}
                    </div>
                    <div style={{ display: 'flex' }}>
                      <p>Location</p>- <span className="text-info">{one.location}</span>
                    </div>
                    <div style={{ display: 'flex' }}>
                      <p>Time Reported</p> -<Moment format="YYYY-MM-DD">{one.time_of_report}</Moment>
                    </div>

                    <div style={{ display: 'flex' }}>
                      <p>Time Updated</p> -<Moment format="YYYY-MM-DD">{one.status_updated_at}</Moment>
                    </div>
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
