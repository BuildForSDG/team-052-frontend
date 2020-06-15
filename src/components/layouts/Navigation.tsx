import React, { useContext, FC } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { NavItem } from '../../styles/NavStyles';
import Urls from '../../utils/Paths';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import AppContext from '../../context/AppContext';
import { NavigationProps } from '../../interfaces/NavigationProps';
import { withRouter } from 'react-router';
// eslint-disable-next-line react/prop-types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line react/prop-types
const Navigation: FC<NavigationProps> = ({ variantColor, backgroundColor, history }) => {
  const { logoutUser } = useContext(AppContext);
  return (
    <div style={{ marginBottom: '0.4%', background: backgroundColor }}>
      <Navbar collapseOnSelect expand="lg">
        <div style={{ width: '40%', fontSize: '1rem' }} className="ml-0">
          <Navbar.Brand>
            <Link style={{ color: 'black' }} to={sessionStorage.getItem('ApiToken') ? Urls.AUTH_HOME : Urls.HOME}>
              PROJECT-052
            </Link>
          </Navbar.Brand>
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <div
            style={{ width: '100%' }}
            className="text-center
            "
          >
            {sessionStorage.getItem('ApiToken') ? (
              <Nav>
                <NavItem>
                  <Link to={Urls.CREATE_REPORT} style={{ color: 'beige' }}>
                    Create Report
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to={Urls.CREATE_ADMIN} style={{ color: 'beige' }}>
                    Create Admin
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to={Urls.METRICS} style={{ color: 'beige' }}>
                    Metrics
                  </Link>
                </NavItem>
                <div className="logout" onClick={() => logoutUser(history)}>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </div>
              </Nav>
            ) : (
              <Nav>
                <NavItem>
                  <Link to={Urls.CREATE_REPORT} style={{ color: 'beige' }}>
                    Create Report
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to={Urls.METRICS} style={{ color: 'beige' }}>
                    Metrics
                  </Link>
                </NavItem>

                <NavItem>
                  <Link to={Urls.LOGIN} style={{ color: 'beige' }}>
                    Login
                  </Link>
                </NavItem>
              </Nav>
            )}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

// Navigation.propTypes = {
//   variantColor: PropTypes.string,
//   backgroundColor: PropTypes.string,
//   history: PropTypes.shape(),
// };
export default withRouter(Navigation);
