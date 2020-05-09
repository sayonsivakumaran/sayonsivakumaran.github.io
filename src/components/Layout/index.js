import React from 'react';
import Container from 'react-bootstrap/Container';
import './styles.css'

export default (props) => (
  <Container>
    {props.children}
  </Container>
);