import React from 'react';
import './styles.css';
import pdf from '../../assets/dummy.pdf';
import config from './config.js';

export default (props) => (
  <ul className='vertical-nav'>
    <li><a href='/'>Home</a></li>
    <li><a href={ config[props.page].link }>{ config[props.page].header }</a></li>
    <li><a href={pdf}>Resume</a></li>
  </ul>
);
