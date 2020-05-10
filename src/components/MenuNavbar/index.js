import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './styles.css';

// TODO change nav item list so its horizontal and appropriately styled
export default () => (
  <Navbar>
    <Nav className='menu-nav'>
      <Nav.Item className='menu-nav-item'><Nav.Link>Home</Nav.Link></Nav.Item>
      <Nav.Item className='menu-nav-item'><Nav.Link>Home</Nav.Link></Nav.Item>
      <Nav.Item className='menu-nav-item'><Nav.Link>Home</Nav.Link></Nav.Item>
    </Nav>
  </Navbar>
);
