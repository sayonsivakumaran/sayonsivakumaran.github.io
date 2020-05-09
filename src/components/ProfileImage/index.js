import React from 'react';
import { Image } from 'react-bootstrap';
import './styles.css'

export default (props) => (
  <Image
    src={props.img}
    roundedCircle
    className='center-block'
  />
);