/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, FC } from 'react';
import Navigation from '../layouts/Navigation';
import { ReportsContainer } from '../../styles/ReportsStyle';
import useReports from '../../hooks/reports/useReports';
import Dropdown from 'react-bootstrap/Dropdown';
import { ReportsProps } from '../../interfaces/ReportsProps.interface';
import { Link } from 'react-router-dom';
import { showColorForStatus } from '../../utils/helpers';

// eslint-disable-next-line react/prop-types
const Reports: FC<ReportsProps> = ({ history }) => {
  const { reports, loading, getFilteredReport } = useReports();

  // {
  //   "note": "Alice to herself, 'I don't see how the game began. Alice gave a little timidly, for she was to.",
  //   "location": "2903 Pansy Radial Suite 926",
  //   "time_of_report": "2020-05-13T16:16:16.000000Z",
  //   "status_updated_at": "2020-05-13T16:16:16.000000Z"
  //   },

  const displayReports = () =>
    reports && reports.length
      ? reports.map(
          (report: { id: string | number; visual_image: string; title: string; status: string; location: string }) => (
            <div
              // onClick={() => history.push(`${Urls.SINGLE_REPORT}${report.title.replace(/ /g, '-').toLoew}`)}
              // onClick={() => getReport(report.id)}
              key={report.id}
              className="col-md-6 mb-4"
              style={{ width: '18rem' }}
            >
              <div className="card shadow">
                <div className="reports-image m-4">
                  <img src={report.visual_image} className="card-img-top image" />
                </div>
                <div className="card-body pt-2">
                  <p className="card-title text-center">
                    <Link
                      style={{ textDecoration: 'none' }}
                      to={{
                        pathname: `/report/${report.title.replace(/ /g, '-').toLowerCase()}`,
                        state: {
                          report,
                        },
                      }}
                    >
                      <strong className="report-title">{report.title.toUpperCase()}</strong>
                    </Link>
                  </p>
                  <hr />
                  <div style={{ display: 'flex' }}>
                    <p>STATUS</p>-{' '}
                    <span className="report-status" style={{ color: showColorForStatus(report.status) }}>
                      {report.status.toUpperCase()}
                    </span>
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
      {/* <Banner /> */}
      <div className="body">
        <div className="container filter">
          <Dropdown>
            <Dropdown.Toggle style={{ width: '100%' }} variant="success" id="dropdown-basic">
              Filter by status
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => getFilteredReport('pending', history)}>Pending</Dropdown.Item>
              <Dropdown.Item onClick={() => getFilteredReport('enroute', history)}>Enroute</Dropdown.Item>
              <Dropdown.Item onClick={() => getFilteredReport('acknowledged', history)}>Acknowledged</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="container">
          <ReportsContainer>
            <div className="row">
              {loading ? (
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
              ) : (
                displayReports()
              )}
            </div>
          </ReportsContainer>
          {/*<AppFooter />*/}
        </div>
      </div>
    </Fragment>
  );
};

export default Reports;
