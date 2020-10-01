import React from 'react';
import './styles.css';
import { resume } from '../../assets/documents';
import config from './config.js';

const getNavbarHeaders = (currentPage) => {
  if (currentPage) {
    delete config[currentPage];
  }

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
      <a className='nav-link vertical-nav-link mr-1' href={ resume }>Resume</a>
    </li>
  );
  
  return tabs;
}

export default (props) => (
  <nav className="navbar navbar-expand-sm justify-content-end">
    <a className="nav-link vertical-nav-link" href="/">Home</a>
    <div className="collapse navbar-collapse flex-grow-0 ml-auto" id="navbarSupportedContent">
        <ul className="navbar-nav text-right">
            {
              getNavbarHeaders(props.page)
            }
        </ul>
    </div>
</nav>
);
