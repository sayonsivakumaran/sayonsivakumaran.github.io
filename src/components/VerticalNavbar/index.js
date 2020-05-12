import React from 'react';
import './styles.css';
import { resume } from '../../assets/documents';
//import config from './config.js';

export default (props) => (
  <ul className='vertical-nav'>
    <li><a href='/'>Home</a></li>
    {/*<li><a href={ config[props.page].link }>{ config[props.page].header }</a></li>*/}
    <li><a href={resume}>Resume</a></li>
  </ul>
);
