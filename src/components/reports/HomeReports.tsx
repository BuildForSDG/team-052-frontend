/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, FC } from 'react';
// import Navigation from '../layouts/Navigation';
import { ReportsContainer } from '../../styles/ReportsStyle';
import AppFooter from '../layouts/AppFooter';
import useReports from '../../hooks/reports/useReports';
import Dropdown from 'react-bootstrap/Dropdown';
import Moment from 'react-moment';
import Navigation from '../layouts/v2/Navigation';

import { showColorForStatus } from '../../utils/helpers';

const HomeReports: FC = () => {
  const { reports, guestReports, loading, getFilteredReport } = useReports();
  console.log(guestReports);

  const displayReports = () =>
    guestReports && guestReports.length
      ? guestReports.map(
          (report: {
            time_of_report: any;
            id: string | number;
            visual_image: string;
            title: string;
            status: string;
            location: string;
          }) => (
            <div
              // onClick={() => history.push(`${Urls.SINGLE_REPORT}${report.title.replace(/ /g, '-').toLoew}`)}
              // onClick={() => getReport(report.id)}
              key={report.id}
              className="col-md-6 mb-4 report"
              // style={{ width: '18rem' }}
            >
              <div className="card shadow card-report">
                <div className="reports-image m-4">
                  <img src={report.visual_image} className="card-img-top image" />
                </div>
                <div className="card-body pt-2">
                  <p className="card-title text-center">
                    <strong className="report-title">{report.title.toUpperCase()}</strong>
                  </p>
                  <hr />
                  <div className="report-detail">
                    {/*<p>STATUS</p>-{' '}*/}
                    <div className="status" style={{ backgroundColor: showColorForStatus(report.status) }}>
                      <span
                        className="report-status"
                        // style={{ color: showColorForStatus(report.status) }}
                      >
                        {/* {report.status.toUpperCase()} */}
                      </span>
                    </div>
                    <span className="text-right ml-auto report-location">{report.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        )
      : 'no reports';

  return (
    <Fragment>
      <Navigation />
      {/*<Navigation backgroundColor={'rgb(1, 136, 73)'} variantColor={'light'} />*/}
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
