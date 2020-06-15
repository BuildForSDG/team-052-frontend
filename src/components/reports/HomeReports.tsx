/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, FC } from 'react';
import Navigation from '../layouts/Navigation';
import { ReportsContainer } from '../../styles/ReportsStyle';
import AppFooter from '../layouts/AppFooter';
import useReports from '../../hooks/reports/useReports';
import Dropdown from 'react-bootstrap/Dropdown';

const HomeReports: FC = () => {
  const { guestReports, loading, getFilteredReport } = useReports();

  const displayReports = () =>
    guestReports && guestReports.length
      ? guestReports.map(
          (report: { id: string | number; visual_image: string; title: string; status: string; location: string }) => (
            <div key={report.id} className="col-md-6 mb-4" style={{ width: '18rem' }}>
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
          ),
        )
      : 'no reports';

  return (
    <Fragment>
      <Navigation backgroundColor={'rgb(1, 136, 73)'} variantColor={'light'} />
      {/*<Banner />*/}
      <div className="body">
        <div className="container filter">
          <Dropdown>
            <Dropdown.Toggle style={{ width: '100%' }} variant="success" id="dropdown-basic">
              Filter by status
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => getFilteredReport('pending')}>Pending</Dropdown.Item>
              <Dropdown.Item onClick={() => getFilteredReport('enroute')}>Enroute</Dropdown.Item>
              <Dropdown.Item onClick={() => getFilteredReport('acknowledged')}>Acknowledged</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="container ">
          <ReportsContainer>
            <div className="row">
              {loading ? (
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
              ) : (
                displayReports()
              )}
            </div>
          </ReportsContainer>
          {/* <AppFooter /> */}
        </div>
      </div>
    </Fragment>
  );
};

export default HomeReports;
