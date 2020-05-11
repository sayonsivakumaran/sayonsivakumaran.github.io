import React from 'react';
import './styles.css';
import { dummy } from '../../assets/documents';

export default () => (
  <ul className='menu-nav'>
    <li><a href='/about'>About</a></li>
    <li><a href='/projects'>Projects</a></li>
    <li><a href={dummy}>Resume</a></li>
  </ul>
);
