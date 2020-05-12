import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { NavItem } from '../../styles/NavStyles';
import Urls from '../../utils/Paths';

const Navigation = () => {
  return (
    <Container>
      <div style={{ margin: '2%' }}>
        <Navbar collapseOnSelect expand="lg" variant="light">
          <div style={{ width: '40%', fontSize: '1rem', color: 'yellow' }}>
            <Navbar.Brand>
              <Link to={Urls.HOME}>ProjecT-052</Link>
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
                  <Nav.Link href="#deets">Lorem</Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link href="#deets">Lorem</Nav.Link>
                </NavItem>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Container>
  );
};

export default Navigation;
