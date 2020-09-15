import React from 'react';
import './styles.css';
import { resume } from '../../assets/documents';
import config from './config.js';

const getNavbarHeaders = (currentPage) => {
  delete config[currentPage];
  let tabs = [];
  Object.keys(config).forEach(page => {
    tabs.push(
      <li key={ page }>
        <a className='nav-link vertical-nav-link' href={ config[page].link }>{ page }</a>
      </li>
    );
  });
  tabs.push(
    <li key='Resume'>
      <a className='nav-link vertical-nav-link' href={ resume }>Resume</a>
    </li>
  );
  
  return tabs;
}

export default (props) => (
  <nav class="navbar navbar-expand-sm justify-content-end">
    <a class="navbar-link vertical-nav-link ml-1" href="/">Home</a>
    <div class="collapse navbar-collapse flex-grow-0 ml-auto mr-1" id="navbarSupportedContent">
        <ul class="navbar-nav text-right">
            {
              getNavbarHeaders(props.page)
            }
        </ul>
    </div>
</nav>
);
