import React from 'react';
import { Image } from 'react-bootstrap';
import './styles.css'

export default (props) => (
  <Image
    src={props.img}
    rounded
    className='bio-image'
  />
);