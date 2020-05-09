import React from 'react';
import { Image } from 'react-bootstrap';
import img from '../../assets/profile-image.jpg';
import './styles.css'

export default () => (
  <Image
    src={img}
    roundedCircle
    className='center-block'
  />
);