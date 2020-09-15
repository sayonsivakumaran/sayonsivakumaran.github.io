import React from 'react';
import './styles.css';
import { resume } from '../../assets/documents';

export default () => (
  <ul className='menu-nav'>
    <li><a href='/about'>About</a></li>
    <li><a href='/teaching'>Teaching</a></li>
    {/* <li><a href='/projects'>Projects</a></li> */}
    <li><a href={resume}>Resume</a></li>
  </ul>
);
