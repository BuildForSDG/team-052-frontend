import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavItem } from '../../styles/NavStyles';

const Navigation = () => {
  return (
    <Container>
      <div style={{ margin: '2%' }}>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <div style={{ width: '40%', fontSize: '1rem', color: 'yellow' }}>
            <Navbar.Brand href="#home">ProjecT-052</Navbar.Brand>
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <div style={{ width: '100%' }}>
              <Nav>
                <NavItem>
                  <Nav.Link href="#deets">Lorem</Nav.Link>
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
