import React from 'react';
import './styles.css';
import pdf from '../../assets/dummy.pdf'

export default () => (
  <ul className='vertical-nav'>
    <li><a href='/'>Home</a></li>
    <li><a href='/projects'>Projects</a></li>
    <li><a href={pdf}>Resume</a></li>
  </ul>
);
