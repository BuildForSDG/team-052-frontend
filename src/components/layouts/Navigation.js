import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavItem } from '../../styles/NavStyles';
import Urls from '../../utils/Paths';

const Navigation = ({ variantColor, backgroundColor }) => {
  return (
    <div style={{ marginBottom: '0.4%', background: backgroundColor }}>
      <Navbar collapseOnSelect expand="lg" variant={variantColor}>
        <div style={{ width: '40%', fontSize: '1rem' }} className="ml-0">
          <Navbar.Brand>
            <Link style={{ color: 'black' }} to={Urls.HOME}>
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
            <Nav>
              <NavItem>
                {/* <Nav.Link href="#deets"></Nav.Link> */}

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
                <Link to={Urls.CREATE_REPORT} style={{ color: 'beige' }}>
                  Create Report
                </Link>
              </NavItem>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

Navigation.propTypes = {
  variantColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};
export default Navigation;
