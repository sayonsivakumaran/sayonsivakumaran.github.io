import React from 'react';
import './styles.css';
import { resume } from '../../assets/documents';
import config from './config.js';

const func = (currentPage) => {
  delete config[currentPage];
  let tabs = [];
  Object.keys(config).forEach(page => {
    tabs.push(
      <li key={ page }>
        <a href={ config[page].link }>{ page }</a>
      </li>
    );
  });
  tabs.push(
    <li key='Resume'>
      <a href={ resume }>Resume</a>
    </li>
  );
  
  return tabs;
}

export default (props) => (


  <ul className='vertical-nav'>
    {
      func(props.page)
    }
    {/* <li><a href='/'>Home</a></li> */}
    {/* <li><a href={ config[props.page].link }>{ config[props.page].header }</a></li> */}
    {/* <li><a href={resume}>Resume</a></li> */}
  </ul>
);
