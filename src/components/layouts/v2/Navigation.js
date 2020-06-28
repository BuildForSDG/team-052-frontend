import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Urls from '../../../utils/Paths';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import AppContext from '../../../context/AppContext';
import { withRouter } from 'react-router';
const Navigation = ({ history }) => {
  const { logoutUser } = useContext(AppContext);
  return (
    <Navbar expand="lg" className="navbar">
      <Link to={sessionStorage.getItem('ApiToken') ? '/all-reports' : '/'} className="navbar-brand">
        Response52
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {sessionStorage.getItem('ApiToken') ? (
          <Nav className="mr-auto navbar-links-container">
            {/*<Nav.Link href="#home" className="navbar-links">*/}
            {/*  Home*/}
            {/*</Nav.Link>*/}
            <div className="nav-navlinks">
              <Link to={Urls.CREATE_REPORT} className="navbar-links" style={{ color: 'beige' }}>
                Create Report
              </Link>
            </div>
            <div className="nav-navlinks">
              <Link to={Urls.CREATE_ADMIN} className="navbar-links" style={{ color: 'beige' }}>
                Create Admin
              </Link>
            </div>

            <div className="nav-navlinks">
              <Link to={Urls.METRICS} className="navbar-links" style={{ color: 'beige' }}>
                Metrics
              </Link>
            </div>
            <div className="nav-navlinks">
              <div className="logout" onClick={() => logoutUser(history)}>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </div>
            </div>
            {/*<Nav.Link href="#home" className="navbar-links">Home</Nav.Link>*/}
          </Nav>
        ) : (
          <Nav className="mr-auto navbar-links-container">
            <Link to={Urls.CREATE_REPORT} className="navbar-links-unauth" style={{ color: 'beige' }}>
              Create Report
            </Link>
            <Link to={Urls.METRICS} className="navbar-links-unauth" style={{ color: 'beige' }}>
              Metrics
            </Link>
            {/*<Nav.Link href="#home" className="navbar-links">Home</Nav.Link>*/}
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Navigation);
