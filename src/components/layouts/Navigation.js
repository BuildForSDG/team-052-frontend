import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavItem } from '../../styles/NavStyles';
import Urls from '../../utils/Paths';

const Navigation = ({ variant, backgroundColor }) => {
  return (
    <Container>
      <div style={{ margin: '2%', background: backgroundColor }}>
        <Navbar collapseOnSelect expand="lg" variant={variant}>
          <div style={{ width: '40%', fontSize: '1rem' }} className="ml-0">
            <Navbar.Brand>
              <Link style={{ color: 'black' }} to={Urls.HOME}>
                ProjecT-052
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
                  <div>
                    {' '}
                    <Link to={Urls.CREATE_REPORT}>Create Report</Link>
                  </div>
                </NavItem>
                <NavItem>
                  <div>
                    {' '}
                    <Link to={Urls.CREATE_REPORT}>Create Report</Link>
                  </div>
                </NavItem>
                <NavItem>
                  <div>
                    {' '}
                    <Link to={Urls.CREATE_REPORT}>Create Report</Link>
                  </div>
                </NavItem>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Container>
  );
};

Navigation.propTypes = {
  variant: PropTypes.string,
  backgroundColor: PropTypes.string,
};
export default Navigation;
