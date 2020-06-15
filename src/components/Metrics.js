import React, { Fragment } from 'react';
import Navigation from './layouts/Navigation';
import useReports from '../hooks/reports/useReports';

const Metrics = () => {
  const { loading, metrics } = useReports();
  return (
    <Fragment>
      <Navigation backgroundColor={'rgb(1, 136, 73)'} variantColor={'light'} />
      {loading ? (
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
      ) : (
        <div className="container metrics-container">
          <div className="card" style={{ width: '18rem', margin: 'auto' }}>
            <div className="card-body">
              <div className="count">{metrics.reported_cases}</div>
              <h5 className="card-title metric-item" style={{ color: '#f48824' }}>
                Reported Cases
              </h5>
            </div>
          </div>
          <div className="card" style={{ width: '18rem', margin: 'auto' }}>
            <div className="card-body">
              <div className="count">{metrics.pending_cases}</div>
              <h5 className="card-title metric-item" style={{ color: '#f45c38' }}>
                Pending Cases
              </h5>
            </div>
          </div>
          <div className="card" style={{ width: '18rem', margin: 'auto' }}>
            <div className="card-body">
              <div className="count">{metrics.enroute_cases}</div>
              <h5 className="card-title metric-item">Enroute Cases</h5>
            </div>
          </div>
          <div className="card" style={{ width: '18rem', margin: 'auto' }}>
            <div className="card-body">
              <div className="count">{metrics.onsite_cases}</div>
              <h5 className="card-title metric-item">Onsite Cases</h5>
            </div>
          </div>
          <div className="card" style={{ width: '18rem', margin: 'auto' }}>
            <div className="card-body">
              <div className="count">{metrics.acknowledged_cases}</div>
              <h5 className="card-title metric-item" style={{ color: '#673fbb' }}>
                Acknowledged Cases
              </h5>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Metrics;
