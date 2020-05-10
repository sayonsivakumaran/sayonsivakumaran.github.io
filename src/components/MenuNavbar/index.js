import React from 'react';
import './styles.css';
import pdf from '../../assets/dummy.pdf'

export default () => (
  <ul className='menu-nav'>
    <li><a href='/about'>About</a></li>
    <li><a href='/projects'>Projects</a></li>
    <li><a href={pdf}>Resume</a></li>
  </ul>
);
